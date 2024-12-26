import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

// Create the AuthContext with default value as null
const AuthContext = createContext();

// AuthProvider component to wrap around parts of your app that need access to auth state
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Listen for changes to the authentication state
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user); // Set currentUser based on auth state
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const login = user => setCurrentUser(user);
  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
