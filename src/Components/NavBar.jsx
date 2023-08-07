import React from "react";

// Navbar item small components
const NavBarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const NavBar = () => {
  return (
    <nav className="border-y-4">
      <div className="p-4">
        <h1 className="text-4xl font-bold">Brand</h1>
      </div>
      <ul>
        {["link1", "link2", "link3"].map((item, index) => (
          <NavBarItem key={index + item} title={item}></NavBarItem>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
