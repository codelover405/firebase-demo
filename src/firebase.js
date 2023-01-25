
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyAVAPhWfTmYUlZRpPXzXdoaVBs6yyxMqh0",
//   authDomain: "crud-react-firebase-18061.firebaseapp.com",
//   databaseURL: "https://crud-react-firebase-18061-default-rtdb.firebaseio.com",
//   projectId: "crud-react-firebase-18061",
//   storageBucket: "crud-react-firebase-18061.appspot.com",
//   messagingSenderId: "281026692067",
//   appId: "1:281026692067:web:af57f1f899648f1925d6d6"
// };

// export const app = initializeApp(firebaseConfig);




import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';

const firebaseConfig = {
  apiKey: "AIzaSyDHVrUJ_G9WkUi7_ixxel2pVQdA5f0Xe38",
  authDomain: "first-app-firebase-87397.firebaseapp.com",
  databaseURL: "https://first-app-firebase-87397-default-rtdb.firebaseio.com",
  projectId: "first-app-firebase-87397",
  storageBucket: "first-app-firebase-87397.appspot.com",
  messagingSenderId: "508992025473",
  appId: "1:508992025473:web:4eeeccac69a29569a52e80"
};


firebase.initializeApp(firebaseConfig);
firebase.database();
firebase.storage();
firebase.firestore();

// const app = firebase
export default firebase;