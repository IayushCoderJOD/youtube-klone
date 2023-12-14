import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { youtube_search_link } from "../utils/Constants";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion,setShowSuggestion]=useState(false);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(youtube_search_link + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
  };
  return (
    <div className="grid grid-flow-col shadow-xl">
      <div className="flex col-span-1  m-2  ">
        <img
          alt="hamburger"
          onClick={toggleMenuHandler}
          className="h-7 mt-[17px] ml-2 hover:bg-gray-300 rounded-xl m-1 "
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        />
        <a href="/" >
        <img
          className="h-[65px] pl-[10px] "
          alt="youtube logo"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        />
        </a>
      </div>

      <div className="col-span-10 pl-[290px] ">
        <div>
          <input
            placeholder="Search....🤔"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            className="border w-[550px] border-gray-700 mt-4 p-2 rounded-l-full "
          />
          <button className="border border-gray-700 rounded-r-full bg-gray-100 text-black hover:bg-white  p-2 ">
            {" "}
            🔍
          </button>
        </div>
        {showSuggestion && ( 
        <div className="absolute bg-white py-2 px-5 w-[550px] rounded-lg shadow-xl ">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="py-2 px-3 shadow-sm">
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>

      <div className="col-span-1 flex">
        <img
          className="h-12 mt-3 "
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MmBOmXsxgjBhhfDh4FSeM9wsFRgC_2uPrE362dA&s"
        />
        <h1 className="mt-6 text-lg font-semibold  ml-3">Ayush Tyagi</h1>
      </div>
    </div>
  );
};

export default Header;



// task left is to handle the sticky div item below search barrr..
