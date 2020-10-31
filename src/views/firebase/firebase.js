import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'
import database from 'firebase/database';
const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAZXdAY2T0F0BBJcr8nbVmTM_1MTkATbgc",
  authDomain: "truetask-23b74.firebaseapp.com",
  databaseURL:  "https://truetask-23b74.firebaseio.com",
  projectId: "truetask-23b74",
  storageBucket: "truetask-23b74.appspot.com",
  messagingSenderId:  "86283174594",
};
firebase.initializeApp(config);
//firebase.database()

//firebase.firestore().settings(settings);

export default firebase;