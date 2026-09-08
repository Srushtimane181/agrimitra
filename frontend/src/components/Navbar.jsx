import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🌱 AgriMitra
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/crops">Crops</Link>
        <Link to="/diseases">Diseases</Link>
        <Link to="/schemes">Schemes</Link>
        <Link to="/tips">Farming Tips</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;