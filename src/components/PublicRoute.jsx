// PublicRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PublicRoute = ({ children }) => {
  const { token } = useUser();

  if (token) {
    // Si está autenticado, redirige a home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
