export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const createPrediction = await fetch(
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
            prompt:
              "luxury celebrity fashion outfit, ultra realistic, cinematic lighting, premium fashion style, influencer aesthetic",
          },
        }),
      }
    );

    const prediction = await createPrediction.json();

    const predictionId = prediction.id;

    let output = null;

    for (let i = 0; i < 15; i++) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const checkPrediction = await fetch(
        `https://api.replicate.com/v1/predictions/${predictionId}`,
        {
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          },
        }
      );

      const predictionResult = await checkPrediction.json();

      if (predictionResult.status === "succeeded") {
        output = predictionResult.output;
        break;
      }
    }

    return res.status(200).json({
      success: true,
      result: Array.isArray(output) ? output[0] : output,
    });
  } catch (error) {
    return res.status(500).json({
      error: "AI generation failed",
    });
  }
}
