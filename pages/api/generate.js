export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const response = await fetch(
      "https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: {
            prompt:
              "Luxury celebrity fashion photoshoot, premium designer outfit, ultra realistic, cinematic lighting, influencer fashion, highly detailed",
          },
        }),
      }
    );

    const prediction = await response.json();

    let outputUrl = "";

    if (prediction?.urls?.get) {
      for (let i = 0; i < 20; i++) {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const result = await fetch(prediction.urls.get, {
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          },
        });

        const resultData = await result.json();

        if (resultData.status === "succeeded") {
          outputUrl = resultData.output[0];
          break;
        }
      }
    }

    return res.status(200).json({
      success: true,
      result: outputUrl,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "AI generation failed",
    });
  }
}
