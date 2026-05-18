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
            "39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
          input: {
            prompt:
              "Luxury celebrity fashion outfit, modern fashion style, realistic professional photography",
            image: image,
            prompt_strength: 0.8,
          },
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.error || data.detail) {
      return res.status(500).json({
        error: data.error || data.detail || "Replicate API Error",
      });
    }

    return res.status(200).json(data);

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      error: error.message,
    });
  }
}
