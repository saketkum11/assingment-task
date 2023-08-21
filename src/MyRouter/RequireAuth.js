import React from "react";
import { useAuth } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location.pathname }} />
  );
};

export { RequireAuth };
