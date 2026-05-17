export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        error: "No image provided",
      });
    }

    // Remove base64 header
    const base64Data = image.replace(
      /^data:image\/\w+;base64,/,
      ""
    );

    // Start prediction
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
            "db21e45bda4f4f8b3f8f0fd52c4c7f1fcbf8f4b5d6d7e8f9a0b1c2d3e4f5a6b",

          input: {
            image: `data:image/png;base64,${base64Data}`,
            prompt:
              "High fashion luxury outfit, modern celebrity fashion style, professional fashion photography",
          },
        }),
      }
    );

    const prediction = await response.json();

    console.log("Replicate response:", prediction);

    // Error from Replicate
    if (prediction.detail || prediction.error) {
      return res.status(500).json({
        error:
          prediction.detail ||
          prediction.error ||
          "Replicate API failed",
      });
    }

    // Prediction ID missing
    if (!prediction.id) {
      return res.status(500).json({
        error: "Prediction ID not returned",
      });
    }

    // Wait for result
    let result = prediction;

    for (let i = 0; i < 15; i++) {
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      const checkResponse = await fetch(
        `https://api.replicate.com/v1/predictions/${prediction.id}`,
        {
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          },
        }
      );

      result = await checkResponse.json();

      console.log("Prediction status:", result.status);

      if (result.status === "succeeded") {
        return res.status(200).json({
          output: result.output,
        });
      }

      if (result.status === "failed") {
        return res.status(500).json({
          error: "AI generation failed",
        });
      }
    }

    return res.status(500).json({
      error: "Generation timeout",
    });
  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      error: error.message || "Internal server error",
    });
  }
}
