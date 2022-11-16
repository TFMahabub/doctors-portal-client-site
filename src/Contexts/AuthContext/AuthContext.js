import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { app } from '../../firebase/firebase.config';

export const AuthProvider = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthContext = ({children}) => {

  const [user, setUser]= useState('');
  const [loading, setLoading] = useState(true)


  const signUp = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth);
  }

  const logInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }



  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>unSubscribe()
  },[])

  const authInfo = {
    user,
    loading,
    signUp, 
    logIn,
    logOut,
    logInWithGoogle
  }
  return (
    <AuthProvider.Provider value={authInfo}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;