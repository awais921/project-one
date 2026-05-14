export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    return res.status(200).json({
      success: true,
      result:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "AI generation failed",
    });
  }
}
