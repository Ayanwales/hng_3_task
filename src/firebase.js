import { initializeApp } from 'firebase/app'
import { getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut
 } from 'firebase/auth'

const firebaseConfig ={
      apiKey: "AIzaSyC-7l2Q7tB7pEVkZxz_yK4EC6p074M1E5A",
      authDomain: "auth-form-21268.firebaseapp.com",
      projectId: "auth-form-21268",
      storageBucket: "auth-form-21268.appspot.com",
      messagingSenderId: "810660394191",
      appId: "1:810660394191:web:179dd78e15f5cdc41933ba"
}
export const firebaseApp = initializeApp(firebaseConfig)
//### REGISTER USER WITH FIREBASE AUTHENTICATION ###//
export const registerUser = (email, password) => {
      const auth = getAuth();
      return createUserWithEmailAndPassword(auth, email, password);
    };
// ## login user
export const loginUser = (email, password) => {
      const auth = getAuth();
      return signInWithEmailAndPassword(auth, email, password);
    };
// logout user
export const logoutUser = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        alert('User signed out!');
      }).catch((error) => {
        alert('Something went wrong!');
        const errorCode = error.code;
        console.log(errorCode);
      });
    };