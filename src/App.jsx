import { useState, useEffect, useRef } from "react";
import Container from "./components/Container.jsx";
import Submitter from "./components/Submitter.jsx";

function App() {
  const wsRef = useRef(null);
  const [wsReady, setWsReady] = useState(false);

  const [topic, setTopic] = useState("");
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");

  useEffect(() => {
    // wsRef.current = new WebSocket("ws://localhost:8080");
    wsRef.current = new WebSocket("wss://ratherino-server.onrender.com");

    wsRef.current.onopen = () => {
      console.log("Connessione WS aperta");
      setWsReady(true);
    };

    wsRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.key === "updateInfo") {
          if (data.topic !== undefined) setTopic(data.topic);
          if (data.firstChoice !== undefined) setFirstChoice(data.firstChoice);
          if (data.secondChoice !== undefined)
            setSecondChoice(data.secondChoice);

          console.log("Aggiornamento ricevuto:", data);
        }
      } catch (err) {
        console.error("Errore parsing WS:", err);
      }
    };

    wsRef.current.onclose = () => {
      console.log("Connessione WS chiusa");
      setWsReady(false);
    };

    return () => {
      if (wsRef.current) wsRef.current.close();
    };
  }, []);

  return (
    <>
      <div className="container-fluid vh-100">
        {/* Topic */}
        <div className="row pt-3 pb-3 h-25">
          <div className="col-12">
            <Container
              backgroundColor="radial-gradient(146% 141% at 0% 100%, #6d4c8bff, #5c04ffff)"
              textColor="#ffffff"
              value={topic}
              setValue={setTopic}
              disabled={!wsReady}
            />
          </div>
        </div>

        {/* Choices */}
        <div className="row h-75">
          <div className="col-md-6 col-12 pb-3">
            <Container
              backgroundColor="radial-gradient(circle at top right, #ff5a3c, #ff0000)"
              textColor="#000000"
              value={firstChoice}
              setValue={setFirstChoice}
              disabled={!wsReady}
            />
          </div>
          <div className="col-md-6 col-12 pb-3">
            <Container
              backgroundColor="radial-gradient(146% 141% at 0% 100%, #03AAFF, #0490FF)"
              textColor="#000000"
              value={secondChoice}
              setValue={setSecondChoice}
              disabled={!wsReady}
            />
          </div>
        </div>
      </div>

      {/* Submitter */}
      {wsReady && (
        <Submitter
          backgroundColor="radial-gradient(146% 141% at 0% 100%, #6d4c8bff, #5c04ffff)"
          wsRef={wsRef.current}
          wsTopic={topic}
          wsFirstChoice={firstChoice}
          wsSecondChoice={secondChoice}
        />
      )}
    </>
  );
}

export default App;
