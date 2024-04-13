import { initializeApp } from "firebase/app";
import { env } from "../../env.js";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FB_APIKEY,
  authDomain: env.NEXT_PUBLIC_FB_AUTHDOMAIN,
  projectId: env.NEXT_PUBLIC_FB_PROJECTID,
  storageBucket: env.NEXT_PUBLIC_FB_STORAGEBUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FB_MESSAGINGSENDERID,
  appId: env.NEXT_PUBLIC_FB_APPID,
  measurementId: env.NEXT_PUBLIC_FB_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
