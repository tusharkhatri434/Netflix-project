import React from 'react'
import logo from '../assets/Netflix_Logo.png';
import { useSelector,useDispatch } from 'react-redux';
import store from '../utils/appStore';
import { addUser,removeUser } from '../utils/userSlice';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const user = useSelector((store)=>store.user); 
  const dispatch = useDispatch();
  const Navigate = useNavigate(); 

  const handleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Navigate("/");
         dispatch(removeUser());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log("something went wrrong");
      });
  }

  return (
    <div className="z-40 absolute flex justify-between w-full">
      <img className="w-56 max-sm:w-40" src={logo} alt="logo"></img>
      
      {user && <div className=''>
        <img className='w-10' alt='profile avatar' src={user?.photoURL}></img>
        <p onClick={handleSignOut} className='bg-slate-500 font-bold cursor-pointer'>{user?.displayName}</p>
      </div>}
    </div>
  );
}

export default Header