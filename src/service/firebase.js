import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChw_aJrIfk9hHKoI_aQP87EW_un0jkQxo",
  authDomain: "mashreqmobile-df76c.firebaseapp.com",
  databaseURL: "https://mashreqmobile-df76c.firebaseio.com",
  projectId: "mashreqmobile-df76c",
  storageBucket: "mashreqmobile-df76c.appspot.com",
  messagingSenderId: "866589085046",
  appId: "1:866589085046:web:b75f1ac891aa93df28be57",
  measurementId: "G-949X05CVNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
