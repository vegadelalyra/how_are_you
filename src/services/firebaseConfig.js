// src/services/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
} from 'firebase/auth';
import firebaseConfig from '../../firebaseConfig.json';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const currentUser = auth.currentUser;

const googleProvider = new GoogleAuthProvider();

// Set session persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Session persistence set to local.');
  })
  .catch(error => {
    console.error('Error setting persistence:', error);
  });

const oAuth2SignInService = async () => {
  await signInWithPopup(auth, googleProvider);
};

const oAuth2SignOutService = async () => {
  await signOut(auth);
};

export { auth, currentUser, oAuth2SignInService, oAuth2SignOutService };
