import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Travel from "./pages/Travel";
import Navbar from "./components/ui/Navbar"; // optional

function App() {
  return (
    <Router>
      <Navbar /> {/* if you have one */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </Router>
  );
}

export default App;
