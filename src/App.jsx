import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Setup from "./Setup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </Router>
  );
}

export default App;
