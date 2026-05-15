import { useState } from "react";

export default function Home() {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleGenerate = async () => {
    if (!imageFile) return;

    setLoading(true);
    setResult(null);

    try {
      // upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "project_one_upload");

      const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/duhksrhsr/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudData = await cloudRes.json();
      const imageUrl = cloudData.secure_url;

      // send to backend API
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageUrl }),
      });

      const data = await res.json();

      // 🔥 IMPORTANT LINE (RESULT SHOW)
      setResult(data.result);

    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 40, color: "white", background: "#111", minHeight: "100vh", textAlign: "center" }}>
      
      <h1>AI Fashion Generator</h1>

      {/* Upload */}
      <input type="file" accept="image/*" onChange={handleUpload} />

      <br /><br />

      {/* Original Image */}
      {preview && (
        <div>
          <h3>Original Image</h3>
          <img src={preview} width="220" />
        </div>
      )}

      <br />

      {/* Button */}
      <button onClick={handleGenerate}>
        {loading ? "Generating..." : "Generate AI Fashion"}
      </button>

      <br /><br />

      {/* Loading */}
      {loading && <p>Generating AI image...</p>}

      {/* AI Result */}
      {result && (
        <div>
          <h3>AI Result</h3>
          <img src={result} width="220" />
        </div>
      )}

    </div>
  );
  }
