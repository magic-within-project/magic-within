import { initializeApp } from "firebase/app";
import { env } from "../../env.js";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: env.FB_APIKEY,
  authDomain: env.FB_AUTHDOMAIN,
  projectId: env.FB_PROJECTID,
  storageBucket: env.FB_STORAGEBUCKET,
  messagingSenderId: env.FB_MESSAGINGSENDERID,
  appId: env.FB_APPID,
  measurementId: env.FB_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
