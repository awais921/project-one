import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const generateFashion = async () => {
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      setResult(data.data);
    } else {
      alert(data.error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Fashion Generator</h1>

      <input type="file" onChange={handleUpload} />

      {image && (
        <img src={image} width={200} alt="upload" />
      )}

      <br />

      <button onClick={generateFashion} disabled={loading}>
        {loading ? "Generating..." : "Generate AI Fashion"}
      </button>

      {result && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
  }
