export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        success: false,
        error: "Image is required",
      });
    }

    const response = await fetch(
      "https://api.replicate.com/v1/predictions",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version:
            "39ed52f2a78e934c7d14df6f91e4c4c8f0e7cbdeb18f0bc33bd583a14bc58c6f",
          input: {
            image: image,
            prompt:
              "ultra realistic celebrity luxury fashion photoshoot, cinematic lighting, designer outfit, high fashion, detailed face",
          },
        }),
      }
    );

    const prediction = await response.json();

    if (!prediction?.urls?.get) {
      return res.status(500).json({
        success: false,
        error: "Failed to start prediction",
        details: prediction,
      });
    }

    let finalResult = null;

    for (let i = 0; i < 30; i++) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const pollResponse = await fetch(prediction.urls.get, {
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        },
      });

      const pollData = await pollResponse.json();

      if (pollData.status === "succeeded") {
        finalResult = pollData.output?.[0];
        break;
      }

      if (pollData.status === "failed") {
        return res.status(500).json({
          success: false,
          error: "AI generation failed",
          details: pollData,
        });
      }
    }

    if (!finalResult) {
      return res.status(500).json({
        success: false,
        error: "Generation timeout",
      });
    }

    return res.status(200).json({
      success: true,
      result: finalResult,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
