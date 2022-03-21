// Import the functions you need from the SDKs you need
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYtr7Vy8HGOlBtDL5SLslH_q1m4sMA2g0",
  authDomain: "carthago-9b39a.firebaseapp.com",
  projectId: "carthago-9b39a",
  storageBucket: "carthago-9b39a.appspot.com",
  messagingSenderId: "413971305379",
  appId: "1:413971305379:web:969b2e6047c8c78a510016",
  measurementId: "G-G1LW8L52KN"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;



export {timestamp};
export default firebaseApp.firestore();
export const db = firebaseApp.firestore();