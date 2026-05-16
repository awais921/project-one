export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ success: false, error: "Image is required" });
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
          image: image,
          prompt: "A stylish fashion outfit, high quality, runway model, ultra realistic"
        },
      }),
    });

    const prediction = await response.json();

    let result = prediction;

    while (result.status !== "succeeded" && result.status !== "failed") {
      await new Promise((r) => setTimeout(r, 2000));

      const poll = await fetch(
        `https://api.replicate.com/v1/predictions/${result.id}`,
        {
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          },
        }
      );

      result = await poll.json();
    }

    if (result.status === "failed") {
      return res.status(500).json({
        success: false,
        error: "AI generation failed",
      });
    }

    return res.status(200).json({
      success: true,
      output: result.output,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
                                    }
