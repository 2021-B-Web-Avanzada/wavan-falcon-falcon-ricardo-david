import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCSVlJJfIf0dijt6gxRd7fvnKE2F3OrpIg",
    authDomain: "react-chess-eff16.firebaseapp.com",
    projectId: "react-chess-eff16",
    storageBucket: "react-chess-eff16.appspot.com",
    messagingSenderId: "442105207615",
    appId: "1:442105207615:web:f090a86ec28d9e47b2518a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export const auth = firebase.auth()
  export default firebase