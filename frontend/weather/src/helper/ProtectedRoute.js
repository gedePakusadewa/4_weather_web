import React from 'react';
import { Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ children }) => {
    const [cookies, setCookie] = useCookies(['user']);
    
    if (cookies['token'] === undefined) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

  export default ProtectedRoute