import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBAXr1tzv6WyzAycjqSDSsk3NBHzUXVtNk',
  authDomain: 'taeypage.firebaseapp.com',
  projectId: 'taeypage',
  storageBucket: 'taeypage.firebasestorage.app',
  messagingSenderId: '387541431646',
  appId: '1:387541431646:web:f4e95a66edecee4bc18bcf',
  measurementId: 'G-7XCDD9C641',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
// export const db = getFirebasestore(app);
// export const storage = getStorage(app);
