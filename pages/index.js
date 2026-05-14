import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
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
          borderBottom: "1px solid #333",
        }}
      >
        <h2>AI Fashion Generator</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </a>

          <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>
            About
          </a>

          <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            marginBottom: "20px",
          }}
        >
          AI Fashion Generator
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "20px",
            color: "#ccc",
            lineHeight: "1.7",
          }}
        >
          Upload your image and preview your AI fashion transformation instantly.
        </p>

        <div style={{ marginTop: "40px" }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{
              color: "#fff",
              marginBottom: "30px",
            }}
          />

          {image && (
            <div>
              <img
                src={image}
                alt="Preview"
                style={{
                  width: "300px",
                  borderRadius: "20px",
                  border: "3px solid white",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
        }
