// src/components/Home.jsx
import React from 'react';
import { oAuth2SignInService } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import './styles.sass';

function Home() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      login(await oAuth2SignInService());
      // On successful login, navigate to /how
      navigate('/how');
    } catch (error) {
      console.error('Authentication Error: ', error.message);
    }
  };

  return (
    <div className='home-container'>
      <h1>Welcome to the App</h1>
      <button className='home-button' onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Home;
