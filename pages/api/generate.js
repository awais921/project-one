export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        success: false,
        error: "Image is required",
      });
    }

    const replicateRes = await fetch(
      "https://api.replicate.com/v1/predictions",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version:
            "ac732df83cea7fff0902a97d663e1a3a4b9c35f15f1f1ba3a5f5be4d2d7f1c52",
          input: {
            image,
            prompt:
              "luxury fashion photoshoot, ultra realistic, cinematic lighting",
          },
        }),
      }
    );

    const prediction = await replicateRes.json();

    if (!prediction?.urls?.get) {
      return res.status(500).json({
        success: false,
        error: "Prediction URL missing",
        debug: prediction,
      });
    }

    let outputUrl = "";

    for (let i = 0; i < 20; i++) {
      await new Promise((r) => setTimeout(r, 2000));

      const checkRes = await fetch(prediction.urls.get, {
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        },
      });

      const result = await checkRes.json();

      if (result.status === "succeeded") {
        outputUrl = result.output?.[0];
        break;
      }

      if (result.status === "failed") {
        return res.status(500).json({
          success: false,
          error: "Generation failed",
          debug: result,
        });
      }
    }

    return res.status(200).json({
      success: true,
      result: outputUrl,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
        }
