import React from 'react';
import { Navigate } from 'react-router-dom';
import { currentUser } from '../services/firebaseConfig';

const PrivateRoute = ({ children }) => {
  return currentUser ? children : <Navigate to='/' />;
};

export default PrivateRoute;
