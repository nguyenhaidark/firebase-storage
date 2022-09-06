import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCypvA3aii5wUjR7rlBFq6StIm4wOQhMxU",
  authDomain: "fileofmycv.firebaseapp.com",
  projectId: "fileofmycv",
  storageBucket: "fileofmycv.appspot.com",
  messagingSenderId: "801402352714",
  appId: "1:801402352714:web:28926bb6da46bbb742e2b3",
  measurementId: "G-ET7P511ZK4"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
