import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useUser();

  if (!token) {
    // Si no está autenticado, redirige a login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
