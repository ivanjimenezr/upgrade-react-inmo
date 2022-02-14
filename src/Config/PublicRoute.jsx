import React from 'react'
import { Navigate } from 'react-router-dom'
import { getToken } from './Common'


export const PublicRoute =({ children }) => {
  
  const auth = getToken();
  return !auth ? children : <Navigate to="/dashboard" />;
}