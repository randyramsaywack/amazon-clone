import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUqp-GMO-DYzDun7OL2aA44Vy5GQ9-N5Q",
  authDomain: "clone-b0c24.firebaseapp.com",
  databaseURL: "https://clone-b0c24.firebaseio.com",
  projectId: "clone-b0c24",
  storageBucket: "clone-b0c24.appspot.com",
  messagingSenderId: "59994060128",
  appId: "1:59994060128:web:a59c7187bc6a40f0ec1a05",
  measurementId: "G-3Y8H7E9BZ7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
