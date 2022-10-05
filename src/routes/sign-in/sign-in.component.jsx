import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from '../../utilities/firebase/firebase.utilities';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>Sign on with Google Popup</button>
    </div>
  );
};

export default SignIn;
