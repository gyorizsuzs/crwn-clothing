import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCasXOn21SfR4UHtB9-5VQbEyap94F4BeE',
  authDomain: 'crown-clothing-db-15b38.firebaseapp.com',
  projectId: 'crown-clothing-db-15b38',
  storageBucket: 'crown-clothing-db-15b38.appspot.com',
  messagingSenderId: '376262051226',
  appId: '1:376262051226:web:c886c8802453ceb5f72623',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  //check if user data does exists
  const userSnapshot = await getDoc(userDocRef);
  /*  console.log(userSnapshot);
  console.log(userSnapshot.exists()); */

  //if user data does not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //set the doc to this object
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  //return userDocRef
  return userDocRef;
};
