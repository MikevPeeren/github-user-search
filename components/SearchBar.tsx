import { useRef } from "react";

import Image from "next/image";
import SEARCH_ICON from "../public/icon-search.svg";

const SearchBar = () => {
  const textInput = useRef(null);

  const handleSubmit = () => {
    // gather input data
  };

  return (
    <div className="flex flex-row justify-between items-center h-[69px] bg-lm-white dark:bg-dm-blue shadow-xl rounded-xl overflow-hidden">
      <div className="flex items-center ml-4">
        <div className="w-6 h-6">
          <Image src={SEARCH_ICON} layout="responsive" alt="Search Icon" />
        </div>
        <input
          className="md:pl-4 pl-4 bg-transparent dark:text-dm-white md:text-lg text-xs font-normal placeholder-lm-blue dark:placeholder-dm-white outline-none hover:cursor-pointer md:w-[300px] sm:w-[200px] w-[175px]"
          type="text"
          ref={textInput}
          placeholder="Search Github username..."
        />
      </div>
      <div>
        <span className="md:ml-2 ml-1 text-error hidden">No results</span>
        <button
          className="rounded-xl mx-2 text-lm-white dark:text-dm-white font-bold bg-dm-light-blue py-3 px-5 outline-none hover:cursor-pointer hover:bg-dm-light-blue-hover"
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
