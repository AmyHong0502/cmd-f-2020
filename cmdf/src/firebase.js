import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBBgZzjNfXGz20LkDN6KyL0kbx0ULDqptw",
  authDomain: "financehero-23c43.firebaseapp.com",
  databaseURL: "https://financehero-23c43.firebaseio.com",
  projectId: "financehero-23c43",
  storageBucket: "financehero-23c43.appspot.com",
  messagingSenderId: "424261575675",
  appId: "1:424261575675:web:9cb4ef57f94aef12ff215e",
  measurementId: "G-G38FPQ625Y"
};

firebase.initializeApp(config);
export default firebase;
