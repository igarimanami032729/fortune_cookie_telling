export default function FortuneCard({ message }) {
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        width: "80%",
        maxWidth: "400px",
        background: "#fffdf5",
        fontSize: "18px",
        lineHeight: "1.5",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      📜 {message}
    </div>
  );
}
