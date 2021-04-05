import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAfrnkYb6O_wYdmc5slUdSCsc2wVwlyHWE",
    authDomain: "bbg-system.firebaseapp.com",
    projectId: "bbg-system",
    storageBucket: "bbg-system.appspot.com",
    messagingSenderId: "183807991578",
    appId: "1:183807991578:web:f9729d28219927ec6456a3",
    measurementId: "G-T8D466S5RN"
  };

//init firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()

export {projectAuth, projectFirestore}