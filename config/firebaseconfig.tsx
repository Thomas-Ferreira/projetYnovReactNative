import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyA4eAlUJuj0_Cw4orL_3iKS00lz9mwQmSk",
  authDomain: "firstproject-e9d15.firebaseapp.com",
  databaseURL: "https://firstproject-e9d15-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firstproject-e9d15",
  storageBucket: "firstproject-e9d15.appspot.com",
  messagingSenderId: "936586232072",
  appId: "1:936586232072:web:99385aae6b2e2783f4ecbd",
  measurementId: "G-DGT64MD0VB"
};

export const createUser = () => {
  
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      // User is signed in.
      const { uid, displayName, email } = user;

      // Create a new user object.
      const newUser = {
        uid,
        displayName: !displayName ? displayName : 'test',
        email: email ? email : '',
      }; 
      console.log(user);
      // Add the new user to the Firestore users collection.
      firebase
        .firestore()
        .collection('users')
        .doc(uid)
        .set(newUser);
    }
  });
};

export const readUser = () => {

  const user = firebase.auth().currentUser;
  if (user) {
    return user
  } else {
    return false
  }
};
