import "./Submitter.css";

function Submitter({
  backgroundColor,
  wsRef,
  wsTopic,
  wsFirstChoice,
  wsSecondChoice,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (wsRef && wsRef.readyState === WebSocket.OPEN) {
      wsRef.send(
        JSON.stringify({
          key: "updateInfo",
          topic: wsTopic,
          firstChoice: wsFirstChoice,
          secondChoice: wsSecondChoice,
        })
      );
    } else {
      console.error("WebSocket non aperto");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button
        type="submit"
        style={{
          backgroundImage: backgroundColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          borderRadius: "12px",
          padding: "1rem 2rem",
          cursor: "pointer",
          color: "white",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        Invia
      </button>
    </form>
  );
}

export default Submitter;
