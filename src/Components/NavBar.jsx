import React from "react";
import { Link } from "react-router-dom";

// Navbar item small components
const NavBarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer hover:cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
};

const NavBar = () => {
  return (
    <nav className="border rounded-lg p-4 mt-4 md:flex md:justify-between md:items-center mx-8">
      <div className="text-slate-700">
        <h1 className="text-4xl font-bold">Form Builder</h1>
      </div>
      <ul className="md:flex hidden list-none items-center">
        {["link1", "link2", "link3"].map((item, index) => (
          <NavBarItem key={index + item} title={item}></NavBarItem>
        ))}
        <li className="px-4 py-2 border-2 rounded-lg bg-red-400 text-white">
          Log in
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
