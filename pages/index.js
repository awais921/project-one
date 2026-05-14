import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const generateAI = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          AI Fashion Generator
        </h2>

        <div style={{ display: "flex", gap: "25px" }}>
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
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "65px",
            fontWeight: "bold",
            marginBottom: "25px",
            maxWidth: "900px",
          }}
        >
          Premium AI Fashion Generator
        </h1>

        <p
          style={{
            maxWidth: "800px",
            fontSize: "22px",
            color: "#cccccc",
            lineHeight: "1.8",
            marginBottom: "50px",
          }}
        >
          Upload your photo and create luxury celebrity-inspired AI fashion
          transformations instantly using advanced artificial intelligence.
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "40px",
            borderRadius: "25px",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(15px)",
            width: "100%",
            maxWidth: "600px",
          }}
        >
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
                  width: "100%",
                  maxWidth: "350px",
                  borderRadius: "20px",
                  border: "3px solid #ffffff",
                  marginBottom: "30px",
                }}
              />

              <button
                onClick={generateAI}
                style={{
                  padding: "15px 40px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  background:
                    "linear-gradient(to right, #ffffff, #cccccc)",
                  color: "#000",
                }}
              >
                Generate AI Fashion
              </button>
            </div>
          )}

          {loading && (
            <div style={{ marginTop: "40px" }}>
              <h2>Generating Premium AI Fashion...</h2>
            </div>
          )}

          {!loading && image && (
            <div style={{ marginTop: "40px" }}>
              <h2 style={{ marginBottom: "20px" }}>
                AI Fashion Result
              </h2>

              <img
                src={image}
                alt="AI Result"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  borderRadius: "20px",
                  border: "3px solid #00ff99",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
