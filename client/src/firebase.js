// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-cc6d2.firebaseapp.com",
  projectId: "mernauth-cc6d2",
  storageBucket: "mernauth-cc6d2.appspot.com",
  messagingSenderId: "75415217780",
  appId: "1:75415217780:web:735f1ccac494bd78495321",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
