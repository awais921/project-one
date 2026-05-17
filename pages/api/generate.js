export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const token = process.env.REPLICATE_API_TOKEN;

    if (!token) {
      return res.status(500).json({
        success: false,
        error: "Missing REPLICATE_API_TOKEN",
      });
    }

    // Get latest SDXL version
    const modelResponse = await fetch(
      "https://api.replicate.com/v1/models/stability-ai/sdxl",
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    const modelData = await modelResponse.json();

    const latestVersion = modelData.latest_version.id;

    // Create prediction
    const predictionResponse = await fetch(
      "https://api.replicate.com/v1/predictions",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version: latestVersion,

          input: {
            prompt:
              "Luxury modern fashion outfit, ultra realistic, stylish clothing, fashion photography, 4k",
          },
        }),
      }
    );

    const predictionData = await predictionResponse.json();

    return res.status(200).json({
      success: true,
      id: predictionData.id,
      status: predictionData.status,
      urls: predictionData.urls,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
