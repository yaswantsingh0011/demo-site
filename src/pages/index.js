export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", color: "#0070f3", marginBottom: "1rem" }}>
        🚀 Welcome to My DevOps Demo Site
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", color: "#333" }}>
        This is a simple one-page Next.js website created to understand the DevOps flow.
      </p>
      <button style={{
        marginTop: "2rem",
        padding: "12px 24px",
        fontSize: "1rem",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#0070f3",
        color: "#fff",
        cursor: "pointer"
      }}>
        Click Me 🚀
      </button>
    </div>
  );
}
