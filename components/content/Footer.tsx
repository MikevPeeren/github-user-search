import Image from "next/image";

import TWITTER from "../../public/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 mx-6 mb-6">
      <div className="grid gap-x-3 md:grid-cols-2 grid-cols-1">
        <div className="flex items-start py-1">
          <Image
            className="hover:cursor-pointer"
            alt="Location Icon"
            src={TWITTER}
          />
          <p className="text-lm-blue dark:text-dm-white px-2">San Francisco</p>
        </div>
        <div className="flex items-start py-1">
          <Image
            className="hover:cursor-pointer"
            alt="Website Icon"
            src={TWITTER}
          />
          <p className="text-lm-blue dark:text-dm-white px-2">Not Available</p>
        </div>
      </div>
      <div className="grid gap-x-3 md:grid-cols-2 grid-cols-1">
        <div className="flex items-start py-1">
          <Image
            className="hover:cursor-pointer"
            alt="Twitter Icon"
            src={TWITTER}
          />
          <p className="text-lm-blue dark:text-dm-white px-2">
            https://github.blog
          </p>
        </div>
        <div className="flex items-start py-1">
          <Image
            className="hover:cursor-pointer"
            alt="Work Icon"
            src={TWITTER}
          />
          <p className="text-lm-blue dark:text-dm-white px-2">@github</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
