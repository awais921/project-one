export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
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
            "ac732df83cea7fff0902a97d663e1a3a4b9c35f15f1f1ba3a5f5be4d2d7f1c52",
          input: {
            prompt:
              "luxury celebrity fashion outfit, ultra realistic, cinematic lighting, premium influencer fashion, high detail",
          },
        }),
      }
    );

    const prediction = await response.json();

    let imageUrl =
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b";

    if (prediction?.urls?.get) {
      for (let i = 0; i < 15; i++) {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const resultResponse = await fetch(prediction.urls.get, {
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          },
        });

        const resultData = await resultResponse.json();

        if (resultData.status === "succeeded") {
          if (
            Array.isArray(resultData.output) &&
            resultData.output.length > 0
          ) {
            imageUrl = resultData.output[0];
          }

          break;
        }
      }
    }

    return res.status(200).json({
      success: true,
      result: imageUrl,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "AI generation failed",
    });
  }
              }
