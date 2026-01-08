import { useState } from "react";
import "./login.css";

const API_URL = "https://agenda-backend-1yi8.onrender.com";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const res = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al crear el usuario");
        return;
      }

      setSuccess("Usuario creado correctamente");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Create account</h2>
        <p className="subtitle">Register a new user</p>

        <form onSubmit={handleSubmit}>
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
          {success && <p style={{ color: "#7CFFB2" }}>{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default Register;
