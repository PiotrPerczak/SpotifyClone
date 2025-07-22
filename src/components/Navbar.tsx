import React from "react";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import download from "../assets/download.svg";
import search from "../assets/search.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-neutral-900 w-full h-16 z-50 flex items-center justify-between px-10 text-neutral-100 gap-4">
      <img src={logo} alt="Logo" className="h-10" />
      <div className="flex items-center space-x-4">
        <button className="bg-neutral-800 h-12 w-12 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors">
          <img src={home} alt="Home" className="h-6 " />
        </button>
        <label className="w-[500px]  relative flex items-center">
          <img
            src={search}
            alt="Search"
            className=" absolute ml-3 h-5 w-5"
          />
          <input
            className="bg-neutral-800 pl-10 w-full text-neutral-100 rounded-3xl p-2"
            placeholder="What do you want to play?"
          ></input>
        </label>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-neutral-50 text-neutral-900 rounded-full font-bold px-4 h-8 hover:bg-neutral-300 transition-colors">
          Explore Premium
        </button>
        <button className="text-neutral-200 rounded-md p-2 flex items-center gap-2 hover:bg-neutral-800 transition-colors">
            <img src={download} alt="Download" className="h-6" />Install App
        </button>
        <button className="bg-neutral-800 text-neutral-100 rounded-md p-2">
          Login
        </button>
        <button className="bg-neutral-800 text-neutral-100 rounded-md p-2">
          Login
        </button>
        <button className="bg-neutral-800 text-neutral-100 rounded-md p-2">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
