import firebase from 'firebase';

var firebaseConfig = {
 
    apiKey: "AIzaSyDWTLVUx164uqcGCx8xWJL7e6hrfNyPJjM",
    authDomain: "pro-organiser-app-redux-e426b.firebaseapp.com",
    databaseURL: "https://pro-organiser-app-redux-e426b.firebaseio.com",
    projectId: "pro-organiser-app-redux-e426b",
    storageBucket: "pro-organiser-app-redux-e426b.appspot.com",
    messagingSenderId: "516151082919", 
    appId: "1:516151082919:web:b571072b5adc3d10fac082",
    measurementId: "G-SCMEZN55S2"
  
  };
  // Initialize Firebase
  export const fireStoreConfig=firebase.initializeApp(firebaseConfig);
  export default fireStoreConfig.firestore();
