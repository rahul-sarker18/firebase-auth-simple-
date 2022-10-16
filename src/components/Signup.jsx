import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../context/UserContext";
import app from "../firebase/firebase";
const auth = getAuth(app);

const Signup = () => {
  const { signupuser, googleauth, uppro } = useContext(Authcontext);
  // const [username , setUsername] = useState('');

  const signupbtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

   
    console.log(username, email, password);
    signupuser(email, password)
      .then((puple) => {
        const use = puple.user;
        console.log(use);
        updateProfile(auth.currentUser , {
            displayName: username
          })
          .then(()=>{console.log('succes');})
          .catch(error => console.error(error))
      
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  const googlesignup = () => {
    googleauth()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={signupbtn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  log in...
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button className="btn btn-success" onClick={googlesignup}>
            GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
