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

    const token = process.env.REPLICATE_API_TOKEN;

    if (!token) {
      return res.status(500).json({
        success: false,
        error: "Missing REPLICATE_API_TOKEN",
      });
    }

    const response = await fetch(
      "https://api.replicate.com/v1/predictions",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version:
            "ac732df83cea7fffcbfce61fe3d7f4de8c2a6d79c5b2e6d3f6f5a6c2bc7d2f84",
          input: {
            image: image,
            prompt:
              "Luxury modern fashion outfit, realistic, stylish clothing, high quality fashion photography",
          },
        }),
      }
    );

    const data = await response.json();

    console.log("REPLICATE RESPONSE:", data);

    if (data.detail || data.error) {
      return res.status(500).json({
        success: false,
        error: data.detail || data.error,
      });
    }

    return res.status(200).json({
      success: true,
      id: data.id,
      status: data.status,
      urls: data.urls,
    });
  } catch (error) {
    console.log("SERVER ERROR:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
