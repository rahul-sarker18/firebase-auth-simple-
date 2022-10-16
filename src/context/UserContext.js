import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

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
    const unsubscribe = onAuthStateChanged(auth , currentuser =>{
      setuser(currentuser)
      setLoder(false)
    })
    return ()=>{
      unsubscribe()
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

// -------- update pro
const uppro =(name)=>{
  console.log(name);
  // updateProfile(auth.currentUser , {
  //   displayName: name
  // })
}
  const authInfo = { user, loder , uppro , signupuser, loginuser , logOut ,googleauth };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default UserContext;
