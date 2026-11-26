
import { initializeApp, getApps, getApp }
  from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth }
  from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore }
  from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// ZFSI-HRIS Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxzK62xtPRAw-ruQLo-xcZUBbdaYpOQPE",
  authDomain: "zfsi-hris.firebaseapp.com",
  projectId: "zfsi-hris",
  storageBucket: "zfsi-hris.firebasestorage.app",
  messagingSenderId: "642441161494",
  appId: "1:642441161494:web:23ecd4832f89eac5893e37"
};

// Initialize Firebase only once
const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
