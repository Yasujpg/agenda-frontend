import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ setIsLogged }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">My Agenda</span>
        <div className="navbar-links">
          <a href="/tasks">Agenda</a>
        </div>
      </div>

      <div className="navbar-right">
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
