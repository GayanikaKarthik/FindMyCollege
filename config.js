import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBFhUcbjKyXQZ9-lzelE6cIAukqKc2u9L4",
  authDomain: "findmycolleg.firebaseapp.com",
  projectId: "findmycolleg",
  storageBucket: "findmycolleg.appspot.com",
  messagingSenderId: "1084650094437",
  appId: "1:1084650094437:web:4f4f11322cdd39dd7f2b8c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
