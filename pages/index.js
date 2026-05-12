export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1>AI Celebrity Outfit Generator</h1>

      <p>
        Create viral celebrity fashion looks using AI.
      </p>

      <button style={{
        padding: '12px 24px',
        background: 'black',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Upload Photo
      </button>
    </div>
  )
}
