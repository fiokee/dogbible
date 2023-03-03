import {initializeApp} from 'firebase/app';
import {
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  signInWithRedirect
} from 'firebase/auth'

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
  
  export const signWithGoogle = ()=> signInWithPopup(auth, provider);