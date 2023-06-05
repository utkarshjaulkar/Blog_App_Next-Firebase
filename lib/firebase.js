import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  limit,
} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAb0U-rRIdvF6pCDTrtKHb7vMkPlpMXNuY',
  authDomain: 'next-backend-f87f3.firebaseapp.com',
  projectId: 'next-backend-f87f3',
  storageBucket: 'next-backend-f87f3.appspot.com',
  messagingSenderId: '114905623611',
  appId: '1:114905623611:web:6663b9038344e5943c001e',
  measurementId: 'G-6JF1V3K534',
}

function createFirebaseApp(config) {
  try {
    return getApp()
  } catch {
    return initializeApp(config)
  }
}

// const firebaseApp = initializeApp(firebaseConfig);
const firebaseApp = createFirebaseApp(firebaseConfig)

// Auth exports
// export const auth = firebase.auth();
export const auth = getAuth(firebaseApp)
export const googleAuthProvider = new GoogleAuthProvider()

// Firestore exports
export const firestore = getFirestore(firebaseApp)

// Storage exports
export const storage = getStorage(firebaseApp)
export const STATE_CHANGED = 'state_changed'
