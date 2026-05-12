export default function Home() {
  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
          paddingTop: "80px",
        }}
      >
        <p
          style={{
            color: "#8b5cf6",
            fontWeight: "bold",
            letterSpacing: "1px",
            marginBottom: "20px",
          }}
        >
          AI FASHION GENERATOR
        </p>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.1",
            marginBottom: "25px",
          }}
        >
          Create Viral Celebrity
          <br />
          Outfit Looks With AI
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#b3b3b3",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.7",
            marginBottom: "40px",
          }}
        >
          Upload your photo and generate realistic celebrity fashion styles,
          luxury outfits, streetwear looks, and trending viral aesthetics using AI.
        </p>

        <button
          style={{
            background: "white",
            color: "black",
            border: "none",
            padding: "16px 34px",
            fontSize: "18px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Upload Your Photo
        </button>
      </div>
    </div>
  );
          }
