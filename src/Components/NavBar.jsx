import React from "react";
import { LuBird } from "react-icons/lu";
import { BiLogIn } from "react-icons/bi";

// Navbar item small components
const NavBarItem = ({ title, classProps }) => {
  return (
    <li
      className={`mx-4 cursor-pointer text-sm hover:cursor-pointer ${classProps}`}
    >
      {title}
    </li>
  );
};

const NavBar = () => {
  return (
    <nav className="rounded-2xl p-4 mt-4 md:flex md:justify-between md:items-center mx-8 sticky top-0 z-50 text-white bg-slate-800">
      <div className="text-white">
        <h1 className="text-xl font-extrabold">
          <LuBird className="inline-block mb-2 text-4xl"></LuBird> CRIFORM
        </h1>
      </div>
      <ul className="md:flex hidden list-none items-center">
        {["Dashboard", "Analysis", "Guide"].map((item, index) => (
          <NavBarItem key={index + item} title={item}></NavBarItem>
        ))}
        <li className="px-5 py-2 hover:bg-slate-600 hover:cursor-pointer hover:font-bold rounded-md text-sm text-white">
          Log in <BiLogIn className="inline-block"></BiLogIn>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
