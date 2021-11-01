import { useRef } from "react";

import Image from "next/image";
import SEARCH_ICON from "../public/icon-search.svg";

const SearchBar = () => {
  const textInput = useRef(null);

  const handleSubmit = () => {
    // gather input data
  };

  return (
    <div className="rounded-xl flex flex-row justify-between items-center h-16 bg-dm-blue">
      <div className="mx-8 flex">
        <Image src={SEARCH_ICON} width={25} height={24} alt="Search Icon" />
        <input
          className="mx-6 bg-transparent text-dm-white text-lg font-normal placeholder-dm-white md:w-80 outline-none hover:cursor-pointer"
          type="text"
          ref={textInput}
          placeholder="Search Github Username..."
        />
      </div>
      <div>
        <span className="px-2 text-error hidden">No results</span>
        <button
          className="rounded-xl mx-2 text-dm-white bg-dm-light-blue py-3 px-5 outline-none hover:cursor-pointer hover:bg-dm-light-blue-hover"
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
