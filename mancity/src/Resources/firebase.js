import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDtftCYpY6HvEpMgUG_bEO0oZ0ELovQgUs",
  authDomain: "m-city-da416.firebaseapp.com",
  databaseURL: "https://m-city-da416.firebaseio.com",
  projectId: "m-city-da416",
  storageBucket: "m-city-da416.appspot.com",
  messagingSenderId: "1001508840298",
  appId: "1:1001508840298:web:01bc8ed1a836216bf53b13",
  measurementId: "G-XE65MFHFT8",
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();

firebaseDB
  .ref("matches")
  .once("value")
  .then((snapshot) => {
    console.log(snapshot.val());
  });
