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
      // Step 1: upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "project_one_upload"); // your preset

      const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/duhksrhsr/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudData = await cloudRes.json();
      const imageUrl = cloudData.secure_url;

      // Step 2: send to AI API
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageUrl }),
      });

      const data = await res.json();

      if (data.success) {
        setResult(data.result);
      } else {
        console.log(data.error);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 40, color: "white", background: "#111", minHeight: "100vh" }}>
      <h1>AI Fashion Generator</h1>

      <input type="file" accept="image/*" onChange={handleUpload} />

      {preview && (
        <img src={preview} width="200" style={{ marginTop: 20 }} />
      )}

      <br />

      <button onClick={handleGenerate} style={{ marginTop: 20 }}>
        Generate AI Fashion
      </button>

      {loading && <p>Generating...</p>}

      {result && (
        <div>
          <h3>Result</h3>
          <img src={result} width="300" />
        </div>
      )}
    </div>
  );
  }
