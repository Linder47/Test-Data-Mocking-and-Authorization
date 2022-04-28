import * as firebase from "firebase/app";
import { FirebaseApp, initializeApp } from "firebase/app";
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/messaging'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import * as autho from './authorization-keys'

const firebaseConfig = {
  // apiKey: 'AIzaSyA5zhWqwZky5PQoi4W2ztOb2nfrseR474o',
  apiKey: autho.REACT_APP_API_KEY,
  authDomain: autho.REACT_APP_AUTH_DOMAIN,
  projectId: autho.REACT_APP_PRJECT_ID,
  storageBucket: autho.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: autho.REACT_APP_MESSAGING_SENDER_ID,
  appId: autho.REACT_APP_PRJECT_ID
};

// const initialize = () => firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

console.log('process.env  ');
console.log(process.env);
// console.log(process.env.;



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// export const app = initializeApp(firebaseConfig);
console.log('firebaseConfig  ');
console.log(firebaseConfig);
console.log(app);


const projectAuth = getAuth(app)
const projectFirestore = getFirestore(app)

export { projectAuth, projectFirestore }

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// export const db = getFirestore(app);

// export default auth;