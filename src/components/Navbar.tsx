import React from "react";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import download from "../assets/download.svg";
import search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import avatar from "../assets/avatar.svg";
import friends from "../assets/friends.svg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <nav className="bg-neutral-950 w-full h-16 z-50 flex items-center justify-between px-10 text-neutral-100 gap-4">
      <img src={logo} alt="Logo" className="h-10 cursor-pointer" />
      <div className="flex items-center space-x-4">
        <div className="flex items-center mr-32 gap-2">
          <button className="bg-neutral-800 h-12 w-12 cursor-pointer rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors">
            <img src={home} alt="Home" className="h-6" title="Home" />
          </button>
          <label className="w-[500px] max-md:w-[300px]  relative flex items-center">
            <img src={search} alt="Search" className=" absolute ml-3 h-5 w-5" />
            <input
              className="bg-neutral-800 pl-10 w-full text-neutral-100 rounded-3xl p-2"
              placeholder="What do you want to play?"
            ></input>
          </label>
        </div>
        {/* Main button group for desktop */}
        <div className="flex items-center space-x-4 visible max-xl:hidden">
          <button className="bg-neutral-50 cursor-pointer text-neutral-900 rounded-full font-bold px-4 h-8 hover:bg-neutral-300 transition-colors">
            Explore Premium
          </button>
          <button className="text-neutral-200 rounded-md p-2 flex cursor-pointer items-center gap-2 hover:bg-neutral-800 transition-colors">
            <img src={download} alt="Download" className="h-6" />
            Install App
          </button>
          <button className=" text-neutral-100 rounded-md cursor-pointer p-2">
            <img
              src={bell}
              alt="bell"
              title="Notifications"
              className="h-6 hover:bg-neutral-600  rounded-full"
            />
          </button>
          <button className=" text-neutral-100 rounded-md cursor-pointer   p-2">
            <img
              src={friends}
              alt="friends"
              title="Friends"
              className="h-6 hover:bg-neutral-600 rounded-full"
            />
          </button>
          <button className="bg-neutral-800 hover:bg-neutral-600  text-neutral-100 cursor-pointer rounded-full p-2">
            <img src={avatar} alt="avatar" className="h-10" />
          </button>
        </div>
        {/* Burger menu for mobile (max-xl) */}
        <div className="flex items-center xl:hidden ml-2">
          <button
            className="text-neutral-100 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute top-16 right-10 bg-neutral-900 rounded-lg shadow-lg flex flex-col items-start p-4 space-y-2 z-50 min-w-[200px]">
              <button className="w-full text-left bg-neutral-50 cursor-pointer text-neutral-900 rounded-full font-bold px-4 h-8 hover:bg-neutral-300 transition-colors">
                Explore Premium
              </button>
              <button className="w-full text-left text-neutral-200 rounded-md p-2 flex cursor-pointer items-center gap-2 hover:bg-neutral-800 transition-colors">
                <img src={download} alt="Download" className="h-6" />
                Install App
              </button>
              <button className="w-full text-left text-neutral-100 rounded-md cursor-pointer p-2">
                <img
                  src={bell}
                  alt="bell"
                  title="Notifications"
                  className="h-6 hover:bg-neutral-600  rounded-full"
                />
              </button>
              <button className="w-full text-left text-neutral-100 rounded-md cursor-pointer   p-2">
                <img
                  src={friends}
                  alt="friends"
                  title="Friends"
                  className="h-6 hover:bg-neutral-600 rounded-full"
                />
              </button>
              <button className="w-full text-left bg-neutral-800 hover:bg-neutral-600  text-neutral-100 cursor-pointer rounded-full p-2">
                <img src={avatar} alt="avatar" className="h-10" />
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
