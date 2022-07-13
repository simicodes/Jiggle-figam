import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
//import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  //const handleClose = () => setToggleMenu(!toggleMenu);

  return (
    <div className="w-full h-[90px] cursor-pointer absolute z-10 text-white">
      <div className="max-w-[1240px]  mx-auto px-4 flex justify-between items-center h-full">
        <div className="z-10">
          <img className="w-[195px] h-[65px]" src={Logo} alt="/" />
        </div>
        <div className="hidden md:flex">
          <ul className="text-white flex items-center">
            <li>Home</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Blog</li>
            <li className="login border border-[#1EA6CC] text-[#1EA6CC]">
              Login
            </li>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div onClick={handleToggleMenu} className="block md:hidden">
          {toggleMenu ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            toggleMenu
              ? "w-full h-full   text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Blog</li>
            <li className="login border border-[#1EA6CC] text-[#1EA6CC]">
              Login
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
