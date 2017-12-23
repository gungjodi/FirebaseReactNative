import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQuHWwK0AtshkERf56fBHfQ3tYa5BglLQ",
    databaseURL: "gs://myproject2-a7edd.appspot.com",
    storageBucket: "myproject2-a7edd.appspot.com"
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig);