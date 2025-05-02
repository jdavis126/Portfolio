import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Travel">Travel</Link>

    </nav>
  );
}
