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

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Set session persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Session persistence set to local.');
  })
  .catch(error => {
    console.error('Error setting persistence:', error);
  });

// Authentication services
const oAuth2SignInService = async () => signInWithPopup(auth, googleProvider);
const oAuth2SignOutService = async () => await signOut(auth);

// Export Auth and Google Sign-In/Sign-Out services
export { auth, oAuth2SignInService, oAuth2SignOutService };
