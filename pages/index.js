import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleGenerate = async () => {
    if (!image) return;

    setLoading(true);
    setGeneratedImage(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: image,
        }),
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
        background:
          "linear-gradient(to bottom right, #000000, #111111, #1a1a1a)",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
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
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "80px 20px",
          textAlign: "center",
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
            fontSize: "20px",
            color: "#cccccc",
            marginBottom: "40px",
            lineHeight: "1.7",
          }}
        >
          Upload your photo and generate luxury celebrity-inspired AI fashion
          transformations instantly.
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
            padding: "15px 40px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
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
              alt="Generated"
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
