import Image from "next/image";

import OCTOCAT from "../public/theoctocat.png";
import TWITTER from "../public/icon-twitter.svg";

import Footer from "./content/Footer";

const ContentBlock = () => {
  return (
    <div className="rounded-xl flex flex-col md:justify-between bg-lm-white dark:bg-dm-blue shadow-xl">
      <div className="flex flex-row items-center mt-10 ml-6">
        <Image
          className="rounded-full"
          src={OCTOCAT}
          width={117}
          height={117}
          alt="Picture of the author"
        />
        <div className="flex flex-col justify-around ml-10 px-2">
          <h1 className="text-lm-dark-grey dark:text-dm-white">The Octocat</h1>
          <h3 className="text-lm-light-blue dark:text-dm-light-blue py-1">
            @octocat
          </h3>
          <h3 className="text-lm-grey dark:text-dm-white">
            Joined 25 Jan 2011
          </h3>
        </div>
      </div>
      <p className="mx-6 my-5 text-lm-grey dark:text-dm-white">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <div className="flex flex-row justify-between md:items-center md:px-10 px-4 h-[85px] bg-lm-light-grey dark:bg-dm-black-blue mx-6 mb-10 rounded-xl">
        <div className="flex flex-col justify-around md:justify-between md:items-center">
          <h4 className="text-lm-blue dark:text-dm-white">Repos</h4>
          <h2 className="text-lm-dark-grey dark:text-dm-white">8</h2>
        </div>
        <div className="flex flex-col justify-around md:justify-between md:items-center">
          <h4 className="text-lm-blue dark:text-dm-white">Followers</h4>
          <h2 className="text-lm-dark-grey dark:text-dm-white">3938</h2>
        </div>
        <div className="flex flex-col justify-around md:justify-between md:items-center">
          <h4 className="text-lm-blue dark:text-dm-white">Following</h4>
          <h2 className="text-lm-dark-grey dark:text-dm-white">9</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentBlock;
