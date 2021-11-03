import { useRef } from "react";

import Image from "next/image";
import SEARCH_ICON from "../public/icon-search.svg";

const SearchBar = () => {
  const textInput = useRef(null);

  const handleSubmit = () => {
    // gather input data
  };

  return (
    <div className="rounded-xl flex flex-row justify-between items-center h-[69px] bg-lm-white dark:bg-dm-blue shadow-xl">
      <div className="mx-8 flex items-center">
        <div className="w-[24px] h-[25px]">
          <Image src={SEARCH_ICON} layout="responsive" alt="Search Icon" />
        </div>
        <input
          className="mx-6 bg-transparent dark:text-dm-white text-lg font-normal placeholder-lm-blue dark:placeholder-dm-white md:w-80 outline-none hover:cursor-pointer"
          type="text"
          ref={textInput}
          placeholder="Search Github Username..."
        />
      </div>
      <div>
        <span className="px-2 text-error hidden">No results</span>
        <button
          className="rounded-xl mx-2 text-lm-white dark:text-dm-white bg-dm-light-blue py-3 px-5 outline-none hover:cursor-pointer hover:bg-dm-light-blue-hover"
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
