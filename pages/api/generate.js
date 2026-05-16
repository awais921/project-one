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

    // CREATE AI REQUEST
    const response = await fetch(
      "https://api.replicate.com/v1/predictions",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version: "ac732df83cea7fffcbfce4029cb304e7a255c9d7",
          input: {
            image: image,
            prompt:
              "A stylish modern fashion outfit, ultra realistic, high quality",
          },
        }),
      }
    );

    let prediction = await response.json();

    console.log(prediction);

    // CHECK START
    if (!prediction.id) {
      return res.status(500).json({
        success: false,
        error: "Failed to start AI generation",
      });
    }

    // WAIT FOR RESULT
    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const pollResponse = await fetch(
        `https://api.replicate.com/v1/predictions/${prediction.id}`,
        {
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          },
        }
      );

      prediction = await pollResponse.json();

      console.log(prediction);
    }

    // FAILED
    if (prediction.status === "failed") {
      return res.status(500).json({
        success: false,
        error: "AI generation failed",
      });
    }

    // OUTPUT FIX
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

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
          }
