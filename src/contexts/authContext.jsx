import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext with default value as null
const AuthContext = createContext();

// AuthProvider component to wrap around parts of your app that need access to auth state
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle user login
  const login = user => {
    setCurrentUser(user);
  };

  // Function to handle user logout
  const logout = async () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
