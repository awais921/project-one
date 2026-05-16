export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ success: false, error: "Image missing" });
    }

    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "db21e45e-38a0-4e65-9e3a-6b7a9d5c9c52",
        input: {
          image,
          prompt: "fashion outfit, ultra realistic, runway model"
        },
      }),
    });

    let prediction = await response.json();

    while (prediction.status !== "succeeded" && prediction.status !== "failed") {
      await new Promise((r) => setTimeout(r, 2000));

      const poll = await fetch(
        `https://api.replicate.com/v1/predictions/${prediction.id}`,
        {
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          },
        }
      );

      prediction = await poll.json();
    }

    if (prediction.status === "failed") {
      return res.status(500).json({ success: false, error: "Generation failed" });
    }

    // 🔥 IMPORTANT FIX HERE
    let outputImage = "";

    if (Array.isArray(prediction.output)) {
      outputImage = prediction.output[0];
    } else if (typeof prediction.output === "string") {
      outputImage = prediction.output;
    } else if (prediction.output?.image) {
      outputImage = prediction.output.image;
    }

    return res.status(200).json({
      success: true,
      output: outputImage,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
        } 
