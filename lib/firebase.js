import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {
  FIREBASE_API_KEY,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_MEASUREMENT_ID,
} from '../config';

const firebaseConfig = {
  apiKey: '${FIREBASE_API_KEY}',
  authDomain: 'taeypage.firebaseapp.com',
  projectId: 'taeypage',
  storageBucket: 'taeypage.firebasestorage.app',
  messagingSenderId: '${FIREBASE_MESSAGING_SENDER_ID}',
  appId: '${FIREBASE_APP_ID}',
  measurementId: '${FIREBASE_MEASUREMENT_ID}',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
