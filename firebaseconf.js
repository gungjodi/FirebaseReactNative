
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "<your-api-key>",
    databaseURL: "<your-database-url>",
    storageBucket: "<your-storage-bucket-url>"
  };
export const firebaseApp = firebase.initializeApp(firebaseConfig);
