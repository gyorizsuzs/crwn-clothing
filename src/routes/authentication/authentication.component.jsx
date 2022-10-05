/* import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'; */
import {
  /* auth, */
  signInWithGooglePopup,
  /*   signInWithGoogleRedirect, */
  createUserDocumentFromAuth,
} from '../../utilities/firebase/firebase.utilities';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
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
      {/* <button onClick={logGoogleUser}>Sign on with Google Popup</button> */}
      {/*  <button onClick={signInWithGoogleRedirect}>
        Sign on with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
