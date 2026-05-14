export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "60px 20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "32px",
            color: "#cbd5e1",
            marginBottom: "40px",
          }}
        >
          Need help or want to contact our AI Fashion Generator team?
          We are always ready to help you with outfit ideas,
          celebrity fashion inspiration, and AI styling support.
        </p>

        <div
          style={{
            background: "#1e293b",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          ></textarea>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              padding: "15px 30px",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
          }
