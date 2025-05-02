import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Travel from "./pages/Travel";
import Interests from "./pages/Interests";
import Pets from "./pages/Pets";

import Navbar from "./components/ui/Navbar";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/pets" element={<Pets />} />

        </Routes>
      </Router>
  );
}

export default App;
