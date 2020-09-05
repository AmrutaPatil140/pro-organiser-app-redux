import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAoDx-42nIKo08M7_wniaIbRuTjbQuWVJM",
  authDomain: "pro-organizer-app-redux-f77f6.firebaseapp.com",
  databaseURL: "https://pro-organizer-app-redux-f77f6.firebaseio.com",
  projectId: "pro-organizer-app-redux-f77f6",
  storageBucket: "pro-organizer-app-redux-f77f6.appspot.com",
  messagingSenderId: "984408104885",
  appId: "1:984408104885:web:e0f71b19ee7e0be1d843fc"
  };
  
  export const fireStoreConfig=firebase.initializeApp(firebaseConfig);
  export default fireStoreConfig.firestore();
