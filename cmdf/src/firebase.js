import firebase from 'firebase'
const config ={
    apiKey: "AIzaSyDSpJ1DQuSb9LeCfqsrFNOsDJNaroBtHuc",
    authDomain: "finance-her0.firebaseapp.com",
    databaseURL: "https://finance-her0.firebaseio.com",
    projectId: "finance-her0",
    storageBucket: "finance-her0.appspot.com",
    messagingSenderId: "978897955080",
    appId: "1:978897955080:web:fec576d0a27b1d07e1a4bd",
    measurementId: "G-ZZB7WTQVXX"
};

firebase.initializeApp(config);
export default firebase;