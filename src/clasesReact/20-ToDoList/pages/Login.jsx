import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";


const API_URL = "https://agenda-backend-1yi8.onrender.com";

const Login = ({ setIsLogged }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${API_URL}/api/login`, {
        email,
        password,
      });


      localStorage.setItem("user", JSON.stringify(res.data));

      setIsLogged(true);
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-avatar">👤</div>

        <h2>Welcome back</h2>
        <p className="subtitle">Please login to your account</p>

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

          <button className="login-btn">LOGIN</button>

          {error && <p className="error">{error}</p>}

          <p style={{ marginTop: "16px", fontSize: "14px" }}>
            Don’t have an account?{" "}
            <Link to="/register" style={{ color: "#ff8fe5" }}>
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
