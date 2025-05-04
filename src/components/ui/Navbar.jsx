import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="p-4 bg-gray-800 text-white flex items-center">
      <div className="flex gap-4 flex-1">
        <Link to="/">Home</Link>
        <Link to="/Travel">Travel</Link>
        <Link to="/Pets">Pets</Link>
        <Link to="/Interests">Interests</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-auto px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
