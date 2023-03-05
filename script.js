import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAnFLwXlNSDQrV2fRFqI5smSFIW5m-8sEA",
  authDomain: "peterkamlongera-974dc.firebaseapp.com",
  projectId: "peterkamlongera-974dc",
  storageBucket: "peterkamlongera-974dc.appspot.com",
  messagingSenderId: "282535464183",
  appId: "1:282535464183:web:de56b4aad01cb1545cd7f2",
  measurementId: "G-EQEM1BBDJV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);