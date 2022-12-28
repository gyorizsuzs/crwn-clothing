// import { createContext, useState, useEffect, useReducer } from 'react';
// import { createAction } from '../utilities/reducer/reducer.utils';
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from '../utilities/firebase/firebase.utilities';

// // as the actual value you want to access
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: 'SET_CURRENT_USER',
// };

// const userReducer = (state, action) => {
//   /* console.log('dispatched');
//   console.log(action); */
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };

//     default:
//       throw new Error(`Unhandled type ${type}`);
//   }
// };
// const INITIAL_STATE = {
//   currentUser: null,
// };

// // alias component to wrap the children and be able to use the context provider
// export const UserProvider = ({ children }) => {
//   /* const [currentUser, setCurrentUser] = useState(null); */
//   const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   const { currentUser } = state;
//   /*  console.log(currentUser); */
//   const setCurrentUser = (user) => {
//     dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//   };

//   const value = { currentUser, setCurrentUser };

//   /* signOutUser(); */ //manually signs out

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       /* console.log(user); */
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
