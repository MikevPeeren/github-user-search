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
      <div className="flex items-center md:ml-4 ml-1">
        <div className="md:w-6 w-4 md:h-6 h-4">
          <Image src={SEARCH_ICON} layout="responsive" alt="Search Icon" />
        </div>
        <input
          className="md:pl-4 pl-1 bg-transparent dark:text-dm-white md:text-lg text-xs font-normal placeholder-lm-blue dark:placeholder-dm-white outline-none hover:cursor-pointer overflow-ellipsis"
          type="text"
          ref={textInput}
          placeholder="Search Github username..."
        />
      </div>
      <div>
        <span className="md:ml-2 ml-1 text-error hidden">No results</span>
        <button
          className="rounded-xl text-lm-white dark:text-dm-white font-bold bg-dm-light-blue md:mx-2 mr-1 md:py-3 py-2 md:px-5 px-2 outline-none hover:cursor-pointer hover:bg-dm-light-blue-hover"
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
