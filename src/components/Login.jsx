import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../context/UserContext";

const Login = () => {
  const {loginuser}= useContext(Authcontext)

  const navegat = useNavigate();

  const loginbtn =(e)=>{
    e.preventDefault();
    const form  = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginuser(email , password)
    .then(logeuse =>{
      const user = logeuse.user;
      console.log(user);
      navegat('/home')
    }).catch(error=> console.log(error))

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginbtn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <button className="btn btn-link label-text-alt link link-hover">Forgot password?</button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
