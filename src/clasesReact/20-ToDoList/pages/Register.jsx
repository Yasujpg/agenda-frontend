import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const API_URL = "https://agenda-backend.onrender.com";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API_URL}/api/register`, {
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError("Error al crear el usuario");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Create account</h2>
        <p className="subtitle">Register a new user</p>

        <form onSubmit={onSubmit}>
          <div className="input-group">
            <span>📧</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span>🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-btn">REGISTER</button>

          {error && <p className="error">{error}</p>}

          <p style={{ marginTop: "16px", fontSize: "14px" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#ff8fe5" }}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
