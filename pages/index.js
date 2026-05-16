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
          setResult(data.output);
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

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && (
        <div>
          <h3>Preview</h3>
          <img src={preview} style={styles.image} />
        </div>
      )}

      <button onClick={handleGenerate} style={styles.button}>
        {loading ? "Generating..." : "Generate Fashion"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <h3>Result</h3>
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
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  image: {
    width: "300px",
    marginTop: "10px",
    borderRadius: "10px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
