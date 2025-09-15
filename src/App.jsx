import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Lobby from "./Lobby";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
    </Router>
  );
}

export default App;
