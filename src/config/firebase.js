import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9kw8nLsCpQTmlX8SEoOPhD8Y9BtxNFd8",
    authDomain: "olx-clone-react-2f5ec.firebaseapp.com",
    databaseURL: "https://olx-clone-react-2f5ec.firebaseio.com",
    projectId: "olx-clone-react-2f5ec",
    storageBucket: "olx-clone-react-2f5ec.appspot.com",
    messagingSenderId: "448254897142",
    appId: "1:448254897142:web:af8bc7b548fe1d79f7b5d7",
    measurementId: "G-7BHGLPV0VW"
  });

const db = firebaseApp.database();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };