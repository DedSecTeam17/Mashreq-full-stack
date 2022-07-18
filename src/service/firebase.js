import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBK7bEaZpT3Ub0T1-vYPKJZp4NXhVS4vn4",
    authDomain: "practiceapp-d1c04.firebaseapp.com",
    databaseURL: "https://practiceapp-d1c04.firebaseio.com",
    projectId: "practiceapp-d1c04",
    storageBucket: "practiceapp-d1c04.appspot.com",
    messagingSenderId: "1050652679035",
    appId: "1:1050652679035:web:a7edc2c0bec8a6ded1fbde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export {db}
