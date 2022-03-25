import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyBv_VSq7Ks6Ke7MMml6hCta04YtJhpn9aM",
  authDomain: "icontroled.firebaseapp.com",
  databaseURL: "https://icontroled.firebaseio.com",
  projectId: "icontroled",
  storageBucket: "icontroled.appspot.com",
  messagingSenderId: "89600774314",
  appId: "1:89600774314:web:a9d31779455b5ab5a7c0d3"
};

firebase.initializeApp(firebaseConfig);

export default firebase;