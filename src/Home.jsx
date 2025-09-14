import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/game")}>
      Vai alla pagina di gioco (con useNavigate)
    </button>
  );
}

export default Home;
