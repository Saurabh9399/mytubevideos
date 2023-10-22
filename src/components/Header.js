import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchSuggestionsClickResults, toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_SUGGESTIONS_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../redux/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [focus, setFocus] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const handleClick = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    if (searchQuery) {
      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestions();
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(YOUTUBE_SEARCH_API + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSuggestionClick = async(suggestion) => {
    console.log(suggestion);
    const data = await fetch(YOUTUBE_SUGGESTIONS_SEARCH_API(JSON.stringify(suggestion)));

    const json = await data.json();

    console.log("search result",json.items);

    dispatch(addSearchSuggestionsClickResults(json.items))

    navigate("search")

  };


  return (
    <>
      <div className="col-span-2 flex items-center justify-start">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          className="w-6 mx-2 my-3"
          alt="hamburgerlogo"
          onClick={handleClick}
        />
        <img
          src="https://bevouliin.com/wp-content/uploads/2014/02/video-television-tv-movie-logo-template-preview-bevouliin.jpg"
          className="w-[30%] h-18 mx-1 my-2 hover:scale-125"
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
      {focus && searchQuery && (
        <div className="absolute top-16 border left-[32%] pl-4 py-2 bg-gray-100 rounded-md w-[33%] shadow-md">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                className="font-bold hover:bg-gray-200 p-1"
                key={index}
                onMouseDown={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
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
