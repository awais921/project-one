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
    setResult(null);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image }),
    });

    const data = await res.json();

    if (!data.success) {
      setLoading(false);
      alert(data.error);
      return;
    }

    let prediction = data.data;

    // 🔥 POLLING until done
    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await new Promise((r) => setTimeout(r, 2000));

      const poll = await fetch(prediction.urls.get, {
        headers: {
          Authorization: `Token ${process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN}`,
        },
      });

      prediction = await poll.json();
    }

    setLoading(false);

    if (prediction.status === "succeeded") {
      setResult(prediction.output);
    } else {
      alert("Generation failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Fashion Generator</h1>

      <input type="file" onChange={handleUpload} />

      {image && (
        <div>
          <h3>Uploaded Image</h3>
          <img src={image} width={200} />
        </div>
      )}

      <br />

      <button onClick={generateFashion} disabled={loading || !image}>
        {loading ? "Generating..." : "Generate AI Fashion"}
      </button>

      <hr />

      {result && result[0] && (
        <div>
          <h3>Result</h3>
          <img src={result[0]} width={300} />
        </div>
      )}
    </div>
  );
        }
