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
        error: "No image uploaded",
      });
    }

    // START REPLICATE REQUEST
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
            "ac732df83cea7fffcbfce6e2c0b4b9d0d0f4b8f84dedec5c6e2f6f5d9b6f9c2a",

          input: {
            image: image,
            prompt:
              "Luxury celebrity fashion outfit, modern fashion style, realistic professional fashion photography",
          },
        }),
      }
    );

    const prediction = await response.json();

    console.log("Prediction:", prediction);

    // ERROR CHECK
    if (prediction.error || prediction.detail) {
      return res.status(500).json({
        error:
          prediction.error ||
          prediction.detail ||
          "Replicate API Error",
      });
    }

    // SUCCESS
    return res.status(200).json({
      output: prediction,
    });

  } catch (error) {
    console.log("Server Error:", error);

    return res.status(500).json({
      error: error.message || "Internal Server Error",
    });
  }
}
