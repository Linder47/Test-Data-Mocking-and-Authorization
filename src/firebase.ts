import {  initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import * as autho from './authorization-keys'

const firebaseConfig = {
  apiKey: autho.REACT_APP_API_KEY,
  authDomain: autho.REACT_APP_AUTH_DOMAIN,
  projectId: autho.REACT_APP_PRJECT_ID,
  storageBucket: autho.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: autho.REACT_APP_MESSAGING_SENDER_ID,
  appId: autho.REACT_APP_PRJECT_ID
};

console.log('process.env  ');
console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


const projectAuth = getAuth(app)
const projectFirestore = getFirestore(app)

export { projectAuth, projectFirestore }