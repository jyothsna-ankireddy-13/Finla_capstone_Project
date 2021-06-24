import firebase from 'firebase/app';
import 'firebase/auth';    // for authentication
import 'firebase/storage';   // for storage
import 'firebase/database';  // for realtime database
import 'firebase/firestore'; // for cloud firestore

const firebaseConfig = {
    apiKey: "AIzaSyAkYsBPoD1bMeLxigcGfmVcpJjKPHxiA2c",
    authDomain: "whatsapp-mern-7be67.firebaseapp.com",
    projectId: "whatsapp-mern-7be67",
    storageBucket: "whatsapp-mern-7be67.appspot.com",
    messagingSenderId: "866306831387",
    appId: "1:866306831387:web:74cb98b737ee10816d74be"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db