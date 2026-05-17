export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const token = process.env.REPLICATE_API_TOKEN;

    if (!token) {
      return res.status(500).json({
        error: "Missing REPLICATE_API_TOKEN",
      });
    }

    const response = await fetch(
      "https://api.replicate.com/v1/models/stability-ai/sdxl",
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    const modelData = await response.json();

    // Get latest version automatically
    const latestVersion = modelData.latest_version.id;

    // Create prediction
    const prediction = await fetch(
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

    const data = await prediction.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
