import React from 'react'
import logo from '../assets/Netflix_Logo.png';
// import { useSelector } from 'react-redux';
// import store from '../utils/appStore';
const Header = () => {

  return (
    <div className="z-40 absolute">
      <img className="w-56 max-sm:w-40" src={logo} alt="logo"></img>
    </div>
  );
}

export default Header