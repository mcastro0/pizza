import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password) {
      setIsError(true);
      setMessage("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setIsError(true);
      setMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Simulamos login exitoso
    setIsError(false);
    setMessage("¡Ingreso exitoso!");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>

      {message && (
        <div
          className={`mt-3 alert ${
            isError ? "alert-danger" : "alert-success"
          }`}
          role="alert"
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
