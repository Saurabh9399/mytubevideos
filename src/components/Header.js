import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focus, setFocus] = useState(false);

  const handleClick = () => {
    dispatch(toggleMenu());
  };
  const handleBlur = () => {
    
  };
  const handleFocus = () => {
    setFocus(true);
  }
  useEffect(() => {
    console.log(searchQuery);
    if (searchQuery) {
      const timer = setTimeout(() => getSearchSuggestions(), 200);

      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(YOUTUBE_SEARCH_API + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
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
          className="mt-4 ml-4 mb-4 py-1 px-4 w-1/2 border border-slate-400 rounded-l-full"
          placeholder="Type here..."
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
        />
        <span className="bg-gray-400 p-1 rounded-r-full text-white border border-slate-400 hover:bg-slate-300 hover:text-gray-600">
          Search
        </span>
      </div>
      {searchQuery && focus && (
        <div className="absolute top-16 border left-[32%] pl-4 py-2 bg-gray-100 rounded-md w-[33%] shadow-md">
          <ul>
            {suggestions.map((suggestion) => (
              <li className="font-bold hover:bg-gray-200 p-1">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
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
