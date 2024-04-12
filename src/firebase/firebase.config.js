// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyB333AkLnnbMh1p-4YxgO2Rg-JqW0YxzKQ",
  authDomain: "home-park-5703e.firebaseapp.com",
  projectId: "home-park-5703e",
  storageBucket: "home-park-5703e.appspot.com",
  messagingSenderId: "763786205379",
  appId: "1:763786205379:web:894e973dccbcb5d1eaaa76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

