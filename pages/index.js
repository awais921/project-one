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

    try {
      const reader = new FileReader();

      reader.onloadend = async () => {
        try {
          const base64 = reader.result;

          const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              image: base64,
            }),
          });

          const data = await response.json();

          console.log(data);

          if (data.success) {
            setResult(data.output);
          } else {
            setError(data.error || "Generation failed");
          }

        } catch (err) {
          console.log(err);
          setError("API request failed");
        }

        setLoading(false);
      };

      reader.readAsDataURL(image);

    } catch (err) {
      console.log(err);
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI Fashion Generator</h1>

      <p style={styles.subtitle}>
        Upload your photo and generate AI fashion outfit
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      {preview && (
        <div style={{ marginTop: 20 }}>
          <h3>Preview</h3>
          <img src={preview} alt="preview" style={styles.image} />
        </div>
      )}

      <button onClick={handleGenerate} style={styles.button}>
        {loading ? "Generating..." : "Generate Fashion"}
      </button>

      {error && (
        <p style={styles.error}>{error}</p>
      )}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>AI Result</h3>
          <img src={result} alt="result" style={styles.image} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    minHeight: "100vh",
    background: "#111",
    color: "#fff",
    fontFamily: "Arial",
  },

  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  subtitle: {
    opacity: 0.7,
    marginBottom: "20px",
  },

  image: {
    width: "300px",
    borderRadius: "12px",
    marginTop: "10px",
  },

  button: {
    marginTop: "20px",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    background: "#ff2d55",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },

  error: {
    color: "red",
    marginTop: "15px",
  },
};
