import { useRef } from "react";

import Image from "next/image";
import SEARCH_ICON from "../public/icon-search.svg";

const SearchBar = () => {
  const textInput = useRef(null);

  const handleSubmit = () => {
    // gather input data
  };

  return (
    <div className="flex items-center h-[69px] bg-lm-white dark:bg-dm-blue shadow-xl rounded-xl overflow-hidden">
      <div className="flex flex-row justify-between flex-grow items-center md:mx-4 mx-2">
        <div className="md:w-6 w-4 md:h-6 h-4">
          <Image src={SEARCH_ICON} layout="responsive" alt="Search Icon" />
        </div>
        <input
          className="flex-grow md:pl-4 pl-1 bg-transparent dark:text-dm-white md:text-lg text-xs font-normal placeholder-lm-blue dark:placeholder-dm-white outline-none hover:cursor-pointer overflow-ellipsis"
          type="text"
          ref={textInput}
          placeholder="Search Github username..."
        />
        <span className="md:mx-2 mx-1 text-error md:text-lg text-xs hidden">
          No results
        </span>
        <button
          className="rounded-xl text-lm-white dark:text-dm-white font-bold bg-dm-light-blue md:mx-2 mx-1 md:py-3 py-2 md:px-5 px-2 outline-none hover:cursor-pointer hover:bg-dm-light-blue-hover md:text-lg text-xs transition ease-in-out duration-700 "
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
