// src/services/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import firebaseConfig from '../../firebaseConfig.json';
import { useAuth } from '../contexts/authContext';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const currentUser = auth.currentUser;

const googleProvider = new GoogleAuthProvider();

const { setCurrentState } = useAuth();

// Set session persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Session persistence set to local.');
  })
  .catch(error => {
    console.error('Error setting persistence:', error);
  });

onAuthStateChanged(auth, user => {
  setCurrentState(user);
});

const oAuth2SignInService = async () => {
  return await signInWithPopup(auth, googleProvider);
};

const oAuth2SignOutService = async () => {
  const nullUser = await signOut(auth);
  return nullUser;
};

export { currentUser, oAuth2SignInService, oAuth2SignOutService };
