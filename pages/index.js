import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError("");
  };

  const handleGenerate = async () => {
    if (!image) {
      setError("Please upload an image first");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    const reader = new FileReader();

    reader.onloadend = async () => {
      try {
        const base64 = reader.result;

        const res = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64 }),
        });

        const data = await res.json();

        if (data.success) {
          setResult(data.output); // 🔥 final image URL
        } else {
          setError(data.error || "Something went wrong");
        }
      } catch (err) {
        setError("Request failed");
      }

      setLoading(false);
    };

    reader.readAsDataURL(image);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI Fashion Generator</h1>

      <p style={styles.subtitle}>
        Upload your photo and generate AI fashion outfit
      </p>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && (
        <div style={{ marginTop: 20 }}>
          <h3>Original Image</h3>
          <img src={preview} style={styles.image} />
        </div>
      )}

      <button onClick={handleGenerate} style={styles.button}>
        {loading ? "Generating AI Fashion..." : "Generate Fashion"}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>AI Result</h3>
          <img src={result} style={styles.image} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial",
    background: "#0f0f0f",
    color: "white",
    minHeight: "100vh",
  },
  title: {
    fontSize: "34px",
    marginBottom: "10px",
  },
  subtitle: {
    marginBottom: "20px",
    opacity: 0.7,
  },
  image: {
    width: "300px",
    marginTop: "10px",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(255,255,255,0.2)",
  },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    background: "#ff2d55",
    color: "white",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};
