export default function Home() {
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
          <a
            href="/"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Home
          </a>

          <a
            href="/about"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            About
          </a>

          <a
            href="/contact"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Contact
          </a>

          <a
            href="/privacy-policy"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Privacy
          </a>

          <a
            href="/terms-and-conditions"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Terms
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
            Create celebrity-inspired outfits, luxury fashion looks,
            influencer aesthetics, viral AI styles, and premium outfit
            transformations instantly using artificial intelligence.
          </p>

          <button
            style={{
              marginTop: "40px",
              padding: "15px 40px",
              fontSize: "18px",
              background: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Upload Your Photo
          </button>
        </div>
      </main>
    </>
  );
              }
