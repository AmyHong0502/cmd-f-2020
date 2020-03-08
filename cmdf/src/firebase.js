import firebase from 'firebase'
const config ={
    apiKey: "AIzaSyBBgZzjNfXGz20LkDN6KyL0kbx0ULDqptw",
    authDomain: "financehero-23c43.firebaseapp.com",
    databaseURL: "https://financehero-23c43.firebaseio.com",
    projectId: "financehero-23c43",
    storageBucket: "financehero-23c43.appspot.com",
    messagingSenderId: "424261575675",
    appId: "1:424261575675:web:2aadd8d98d322548ff215e",
    measurementId: "G-SEYZDV9FW2"
};

firebase.initializeApp(config);
export default firebase;