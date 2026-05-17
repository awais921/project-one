export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    // Get image from frontend
    const { image } = req.body;

    // Check image
    if (!image) {
      return res.status(400).json({
        success: false,
        error: "No image provided",
      });
    }

    // Get Replicate token from Vercel
    const token = process.env.REPLICATE_API_TOKEN;

    if (!token) {
      return res.status(500).json({
        success: false,
        error: "Missing REPLICATE_API_TOKEN",
      });
    }

    // Send request to Replicate
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
            "0391b4e237d14bca3c6a6b89c6dd9d56c2b1d4c7b8db9c3a4f5e6d7c8b9a0f1",

          input: {
            image: image,

            prompt:
              "ultra realistic luxury fashion outfit, modern stylish clothes, professional fashion photography, high quality, 4k",

            strength: 0.7,
          },
        }),
      }
    );

    // Convert response to JSON
    const data = await response.json();

    // Handle Replicate errors
    if (!response.ok) {
      return res.status(500).json({
        success: false,
        error: data.detail || data.error || "Replicate API error",
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
