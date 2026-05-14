import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "#111",
          borderBottom: "1px solid #333",
        }}
      >
        <h2 style={{ color: "#fff" }}>AI Fashion Generator</h2>

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

      <main
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            AI Fashion Generator
          </h1>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
              color: "#ccc",
            }}
          >
            Upload your photo and generate celebrity-inspired AI fashion looks instantly.
          </p>

          <div style={{ marginTop: "40px" }}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{
                marginBottom: "20px",
                color: "#fff",
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
                    marginTop: "20px",
                    border: "3px solid #fff",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
