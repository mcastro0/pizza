import React, { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError(true);
      setMessage('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setError(true);
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError(true);
      setMessage('Las contraseñas no coinciden.');
      return;
    }

    setError(false);
    setMessage('¡Registro exitoso!');
  };

  return (
    <div className="w-100" style={{ maxWidth: '400px' }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Contraseña"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Registrarse
        </button>
      </form>
      {message && (
        <div className={`mt-3 alert ${error ? 'alert-danger' : 'alert-success'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
