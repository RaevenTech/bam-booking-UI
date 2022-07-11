import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA2Q8kKXYsgH8zKpVtQtEPkstvk9GwAEKE",
    authDomain: "bid2buy-ca5c9.firebaseapp.com",
    databaseURL: "https://bid2buy-ca5c9-default-rtdb.firebaseio.com",
    projectId: "bid2buy-ca5c9",
    storageBucket: "bid2buy-ca5c9.appspot.com",
    messagingSenderId: "675775514523",
    appId: "1:675775514523:web:892b453c887cd81302433e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
