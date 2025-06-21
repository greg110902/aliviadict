import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="w-full h-20 bg-pink-400 sticky top-0">
        <div className="container px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <input type="text" placeholder="Type here" className="input bg-white my-15 rounded text-black"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
