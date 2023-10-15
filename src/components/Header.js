import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="col-span-2 flex items-center justify-start">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          className="w-6 mx-3 my-3"
          alt="hamburgerlogo"
          onClick={handleClick}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
          className="w-16 h-10 mx-2 my-2"
          alt="youtubelogo"
        />
      </div>
      <div className="col-span-8 flex justify-center items-center m-2">
        <input
          className="mt-4 ml-4 mb-4 p-1 w-1/2 border border-slate-400 rounded-l-full"
          placeholder="Type here..."
        />
        <span className="bg-gray-400 p-1 rounded-r-full text-white border border-slate-400">
          Search
        </span>
      </div>
      <div className="col-span-2 flex items-center justify-evenly">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          className="w-6 h-6"
          alt="usericon"
        />
      </div>
    </>
  );
};

export default Header;
