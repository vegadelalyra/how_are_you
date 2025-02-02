import React from 'react';
import styles from './layout.module.sass';
import { useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { BiExit } from 'react-icons/bi';
import { useAuth } from '../contexts/authContext';
import { oAuth2SignOutService } from '../services/firebaseConfig';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { logout, currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await oAuth2SignOutService(); // Sign out from Firebase
      logout(); // Remove the user from the global state
      navigate('/'); // Redirect to home or login page
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.icons}>
        <button
          className={styles.iconButton}
          aria-label='Settings'
          onClick={() => alert('Settings clicked')}>
          <FiSettings />
        </button>
        {currentUser && (
          <button
            className={styles.iconButton}
            aria-label='Logout'
            onClick={handleLogout}>
            <BiExit />
          </button>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
