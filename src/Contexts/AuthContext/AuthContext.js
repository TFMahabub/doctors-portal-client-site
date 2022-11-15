import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../../firebase/firebase.config';

export const AuthProvider = createContext();
const auth = getAuth(app)

const AuthContext = ({children}) => {


  const signUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    signUp, 
    name: 'mahabub'
  }
  return (
    <AuthProvider.Provider value={authInfo}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;