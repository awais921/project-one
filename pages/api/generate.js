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
            "7762fd07cf82c9485582489c2b0d8f4cb7f8f7966b3f3a7f4d8f4f8b4d5e6c1d",
          input: {
            prompt:
              "Luxury celebrity fashion outfit, modern fashion style, realistic professional photography",
          },
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.error || data.detail) {
      return res.status(500).json({
        error:
          data.error ||
          data.detail ||
          "Replicate API Error",
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
