// import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import {doc, setDoc, getDoc, getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYVoKeux9YT9QJ28h_cd1HG52aOCWv-Vo",
    authDomain: "dogbible-db.firebaseapp.com",
    projectId: "dogbible-db",
    storageBucket: "dogbible-db.appspot.com",
    messagingSenderId: "1064251507456",
    appId: "1:1064251507456:web:14858a10032e9d935669e5"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

//authenticating user with google sign in
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: ""
  })

  export const auth = getAuth();
  
  export const signWithGooglePop = ()=> signInWithPopup(auth, provider);

  // getting a user record into the firestore database
  const db = getFirestore();

  export const getUserFromAuth = async (userAuth, additionalInfo = {})=>{
    if(!userAuth) return;

    const UserDocRef = doc(db, 'users', userAuth.uid)
    // console.log(UserDocRef)
   
    const userSnapShoot = await getDoc(UserDocRef);
    console.log(userSnapShoot)

     //checking if the user data exist and if not we create it
     if(!userSnapShoot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date()

      try {
        await setDoc(UserDocRef, {
         displayName,
         email,
         createdAt,
         ...additionalInfo,
        });
      } catch (error) {
       console.log('error creating the user', error.message);
      }
     }
     return UserDocRef;
  }

  //creating a user with email and password auth 
// export const createAuthUserWithEmailAndPassword = async(email, password)=>{
//   if(!email || !password) return;
//   createUserWithEmailAndPassword(auth, email, password);
// }

 //Signin a user with email and password auth 
// export const signInAuthUserWithEmailAndPassword = async(email, password)=>{
//   if(!email || !password) return;
//   signInWithEmailAndPassword(auth, email, password);
// }