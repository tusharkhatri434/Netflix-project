import React from 'react'
import logo from '../assets/Netflix_Logo.png';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

const Header = () => {

  const user = useSelector((store)=>store.user); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSignOut = ()=>{

    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
         dispatch(removeUser());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log("something went wrrong");
      });
  }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });

      // Unsiubscribe when component unmounts
      return () => unsubscribe();
    }, []);

  return (
    <div className="z-40 absolute flex justify-between w-full shadow-lg bg-transparent">
      <img className="w-40 max-sm:w-40" src={logo} alt="logo"></img>
      
      {user && <div className=''>
        <img className='w-10' alt='profile avatar' src={user?.photoURL}></img>
        <p onClick={handleSignOut} className='bg-slate-500 font-bold cursor-pointer'>{user?.displayName}</p>
      </div>}
    </div>
  );
}

export default Header