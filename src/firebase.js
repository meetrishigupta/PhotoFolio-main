import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8jk0JDBcygcvlBBUFaEEW_WxE2q97TaQ",
  authDomain: "photofolio-2855f.firebaseapp.com",
  projectId: "photofolio-2855f",
  storageBucket: "photofolio-2855f.appspot.com",
  messagingSenderId: "403003345754",
  appId: "1:403003345754:web:02a6f30d59117e05694163"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
