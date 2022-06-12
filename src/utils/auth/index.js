import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_PROJECT + ".firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT,
  storageBucket: process.env.REACT_APP_FIREBASE_PROJECT + ".appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// 設定語言
auth.languageCode = "zh-TW";

// NOTE auth狀態監聽
export const userOnChanged = (callBack) => onAuthStateChanged(auth, callBack);

// NOTE 信箱登入
export const userCreate = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
export const userLogin = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// NOTE google登入
const googleProvider = new GoogleAuthProvider();
export const userLinkGoogle = () => signInWithPopup(auth, googleProvider);

// NOTE 登出
export const userLogout = () => signOut(auth);
