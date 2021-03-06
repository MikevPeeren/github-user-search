import { useRef } from "react";

import Image from "next/image";
import SEARCH_ICON from "../public/icon-search.svg";

interface ISearchBar {
  handleSubmit: (username: string) => {};
  noUser: boolean;
}

const SearchBar = ({ handleSubmit, noUser }: ISearchBar) => {
  const textInput = useRef(null);

  const handleSubmitClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    handleSubmit(
      //@ts-ignore
      textInput?.current?.value ? textInput?.current?.value : "undefined"
    );
  };
  return (
    <form onSubmit={handleSubmitClick}>
      <div className="flex items-center h-[69px] bg-lm-white dark:bg-dm-blue shadow-xl rounded-xl overflow-hidden">
        <div className="flex flex-row flex-grow items-center md:mx-4 mx-2">
          <div className="md:w-6 w-4 md:h-6 h-4">
            <Image src={SEARCH_ICON} layout="responsive" alt="Search Icon" />
          </div>
          <input
            className="flex-grow md:pl-4 pl-1 bg-transparent dark:text-dm-white md:text-lg text-xs font-normal placeholder-lm-blue dark:placeholder-dm-white outline-none hover:cursor-pointer overflow-ellipsis sm:max-w-none max-w-[15ch]"
            type="text"
            maxLength={30}
            ref={textInput}
            placeholder="Search Github username..."
          />
          {noUser && (
            <p className="md:mx-2 mx-1 text-error md:text-lg text-xs ml-auto">
              No results
            </p>
          )}
          <button
            className="rounded-xl text-lm-white dark:text-dm-white font-bold bg-dm-light-blue md:mx-2 mx-1 md:py-3 py-2 md:px-5 px-2 outline-none hover:cursor-pointer hover:bg-dm-light-blue-hover md:text-lg text-xs transition ease-in-out duration-700 ml-auto"
            type="submit"
            aria-label="github user search trigger"
            onClick={handleSubmitClick}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
