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
        error: "No image provided",
      });
    }

    // CREATE PREDICTION
    const createResponse = await fetch(
      "https://api.replicate.com/v1/predictions",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version: "db21e45e-38a0-4e65-9e3a-6b7a9d5c9c52",
          input: {
            image: image,
            prompt:
              "A stylish modern fashion outfit, ultra realistic, high quality",
          },
        }),
      }
    );

    const prediction = await createResponse.json();

    console.log(prediction);

    if (!prediction.id) {
      return res.status(500).json({
        success: false,
        error: "Failed to start AI generation",
      });
    }

    let result = prediction;

    // POLLING
    while (
      result.status !== "succeeded" &&
      result.status !== "failed"
    ) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const pollResponse = await fetch(
        `https://api.replicate.com/v1/predictions/${result.id}`,
        {
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          },
        }
      );

      result = await pollResponse.json();

      console.log(result);
    }

    if (result.status === "failed") {
      return res.status(500).json({
        success: false,
        error: "AI generation failed",
      });
    }

    // OUTPUT FIX
    let outputImage = "";

    if (Array.isArray(result.output)) {
      outputImage = result.output[0];
    } else if (typeof result.output === "string") {
      outputImage = result.output;
    } else if (result.output?.image) {
      outputImage = result.output.image;
    }

    return res.status(200).json({
      success: true,
      output: outputImage,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
  }
