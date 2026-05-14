import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setGeneratedImage(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
      });

      const data = await response.json();

      if (data.success) {
        setGeneratedImage(data.result);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial",
        paddingBottom: "50px",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid #222",
        }}
      >
        <h2>AI Fashion Generator</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "#fff" }}>
            Home
          </a>

          <a href="/about" style={{ color: "#fff" }}>
            About
          </a>

          <a href="/contact" style={{ color: "#fff" }}>
            Contact
          </a>
        </div>
      </nav>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          Premium AI Fashion Generator
        </h1>

        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            lineHeight: "1.7",
            marginBottom: "40px",
          }}
        >
          Upload your photo and create luxury celebrity-inspired AI fashion
          transformations instantly using advanced artificial intelligence.
        </p>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <br />
        <br />

        {image && (
          <img
            src={image}
            alt="Preview"
            style={{
              width: "300px",
              borderRadius: "20px",
              marginBottom: "30px",
            }}
          />
        )}

        <br />

        <button
          onClick={handleGenerate}
          style={{
            padding: "15px 35px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "10px",
            border: "none",
          }}
        >
          Generate AI Fashion
        </button>

        {loading && (
          <div style={{ marginTop: "40px" }}>
            <h2>Generating AI Fashion...</h2>
          </div>
        )}

        {generatedImage && (
          <div style={{ marginTop: "50px" }}>
            <h2>AI Fashion Result</h2>

            <img
              src={generatedImage}
              alt="AI Result"
              style={{
                width: "350px",
                borderRadius: "20px",
                marginTop: "20px",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
    }
