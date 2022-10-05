/* import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'; */
import {
  /* auth, */
  signInWithGooglePopup,
  /*   signInWithGoogleRedirect, */
  createUserDocumentFromAuth,
} from '../../utilities/firebase/firebase.utilities';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  /* useEffect(
    () => async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    },
    []
  ); */

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  /* const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  }; */ // we don't need it after importing getRedirectResult and auth

  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>Sign on with Google Popup</button>
      {/*  <button onClick={signInWithGoogleRedirect}>
        Sign on with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
