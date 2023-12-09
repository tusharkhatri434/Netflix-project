import React from 'react'
import banner from "../assets/login_banner.jpg"
import Header from './Header'
import { useState } from 'react'
const Login = () => {
  
  const [signIn,setSignIn] = useState(false);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const[name , setName] = useState("");
  function toogleForm (){
    setSignIn(!signIn);
  }
   
  const formSubmitHandler = (e) =>{
           e.preventDefault();
           console.log(name,email,password);
           setEmail("");
           setName("");
           setPassword("");
  }

  return (
    <div>
      <Header />
      <img
        src={banner}
        alt="banner"
        className="brightness-[.40] w-screen min-h-screen  max-sm:hidden"
      ></img>
      <div className=" px-12 py-16 max-sm:py-28 w-[26rem] max-sm:w-full max-sm:static max-sm:rounded-none max-sm:h-[100vh]  bg-black absolute top-24 max-md:right-36 max-lg:right-1/4  right-1/3 rounded-md bg-opacity-80">
        <form onSubmit={formSubmitHandler}  className="flex flex-col gap-4 ">
          <p className="text-4xl font-semibold mb-3 text-white">
            {signIn ? "Sign Up" : "Sign In"}
          </p>
          {signIn ? (
            <input
              className="h-14 px-4 rounded-md bg-zinc-800 text-white outline-none"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : null}
          <input
            className="h-14 px-4 rounded-md bg-zinc-800 text-white outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="h-14 rounded-md px-4 bg-zinc-800 text-white outline-none"
            type="password"
            placeholder="Password"
            name='password'
            autoComplete='on'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="h-14 rounded-md bg-red-600 text-white mt-8"
            type='submit'
          >
            {signIn ? "Sign Up" : "Sign In"}
          </button>
          <div className="flex justify-between text-zinc-400 px-1 ">
            <div className="flex gap-1 items-center">
              <input type="checkbox"></input>
              <p>Remember me</p>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <p className="mt-6 text-zinc-400">
          {signIn ? "Already have an account? " : "New to Netflix? "}
          <button type='submit' onClick={toogleForm} className="text-white cursor-pointer">
            {signIn ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login