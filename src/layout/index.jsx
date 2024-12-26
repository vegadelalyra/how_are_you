import React from 'react';
import styles from './layout.module.sass';
import { useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'; // Settings icon
import { BiExit } from 'react-icons/bi'; // Exit icon
import { currentUser, oAuth2SignOutService } from '../services/firebaseConfig';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await oAuth2SignOutService(); // Firebase sign-out
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
