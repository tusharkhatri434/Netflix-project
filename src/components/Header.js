import React, { useState } from 'react'
import logo from '../assets/Netflix_Logo.png';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { PROFILE_AVATAR } from '../utils/constants';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

const Header = () => {

  const user = useSelector((store)=>store.user); 
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [bgNavbar,setbgNavbar] = useState("");
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

      window.addEventListener('scroll',function bgNavbar(){
        if(window.scrollY > 10){
          setbgNavbar("bg-neutral-900");
        }
        else{
          setbgNavbar("");
        }
      })

      // Unsiubscribe when component unmounts
      return () =>{
      unsubscribe();
      // window.removeEventListener('scroll');
    }
    }, []);

  return (
    <div
      className={`z-40 top-0 fixed items-center flex justify-between w-full transition ease-in delay-200 ${bgNavbar}`}
    >
      <img className="w-40 ml-2 max-sm:w-40" src={logo} alt="logo"></img>
      {user && (
        <div className="flex text-white text-lg gap-10 mr-[32rem]">
          <Link className='hover:text-red-500' to="/browse">Home</Link>
          <Link className='hover:text-red-500' to="/browse/tvshows">TV Shows</Link>
          <Link className='hover:text-red-500' to="/browse/movies">Movies</Link>
          <Link className='hover:text-red-500' to="/browse/new-and-popular">Trending</Link>
        </div>
      )}
      {user && (
        <div className="flex justify-between gap-5 items-center">
          <Link className="flex gap-3 border-[1px] rounded-full px-2 font-light items-center justify-center text-white text-lg" to="/browse/search">
            <IoSearch color="white" size="20" />
            <p className='text-xl'>Search</p>
          </Link>
          <img className="h-12 mr-6 rounded-lg" alt="profile avatar" src={PROFILE_AVATAR}></img>
          {/* <p onClick={handleSignOut} className='bg-slate-500 font-bold cursor-pointer '>{user?.displayName}</p> */}
        </div>
      )}
    </div>
  );
}

export default Header