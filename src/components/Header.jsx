import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../context/UserContext";

const Header = () => {
  const {user,logOut} =useContext(Authcontext)
  console.log(user);

  const signout =()=>{
    logOut()
    .then(()=> {})
    .catch(error => console.log(error))
  }
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content  justify-between container mx-auto p-5">
        <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        <div className="gap-5">
        <NavLink className={({isActive})=> isActive ? 'text-amber-500' : undefined} to='/home'>Home</NavLink>
        <NavLink className={({isActive})=> isActive ? 'text-amber-500' : undefined} to='/orderss'>Order</NavLink>
        <NavLink className={({isActive})=> isActive ? 'text-amber-500' : undefined} to='/login'>Log In</NavLink>
        <NavLink className={({isActive})=> isActive ? 'text-amber-500' : undefined} to='/signup'>sign up</NavLink>
        {user?.email && <h1>{user.email}</h1>}

        <button onClick={signout} className="btn btn-accent">sign out</button>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
