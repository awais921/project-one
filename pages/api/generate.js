export default async function handler(req, res) {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: "Image is required" });
    }

    // Step 1: Create prediction
    const response = await fetch("https://api.replicate.com/v1/predictions", {
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
            "ultra realistic celebrity luxury fashion photoshoot, designer outfit",
        },
      }),
    });

    let prediction = await response.json();

    if (!prediction.id) {
      return res.status(500).json({
        error: "Prediction failed to start",
        details: prediction,
      });
    }

    // Step 2: Wait for result (Polling)
    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await new Promise((r) => setTimeout(r, 2000));

      const pollRes = await fetch(
        `https://api.replicate.com/v1/predictions/${prediction.id}`,
        {
          headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          },
        }
      );

      prediction = await pollRes.json();
    }

    // Step 3: Final response
    return res.status(200).json({
      success: true,
      result: prediction.output,
      full: prediction,
    });

  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
        }
