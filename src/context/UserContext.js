import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Authcontext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setuser] = useState({});
  const [loder , setLoder] =useState(true)

  // ------- sign up ---
  const signupuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };
// --------log in ------
const loginuser =(email , password)=>{
  return signInWithEmailAndPassword(auth , email , password)
}
//-------- curent user get 
  useEffect(()=>{
    const unsubscrib = onAuthStateChanged(auth , currentuser =>{
      setuser(currentuser)
      setLoder(false)
    })
    return ()=>{
      unsubscrib()
    }
  }, [])

  // --------sign out ------

  const logOut=()=>{
    return signOut(auth);
  }

  //  GOOGLE PROVIDER USD
  
  const googleprovider = new GoogleAuthProvider();
  const googleauth =()=>{
   return signInWithPopup(auth , googleprovider);
  }
  const authInfo = { user, loder , signupuser, loginuser , logOut ,googleauth };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default UserContext;
