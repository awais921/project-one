export default async function handler(req, res) {
  try {
    const { image } = req.body;

    console.log("IMAGE URL:", image);

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

    const prediction = await response.json();

    console.log("PREDICTION:", prediction);

    return res.status(200).json(prediction);

  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
                }
