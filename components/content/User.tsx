import Image from "next/image";

import OCTOCAT from "../../public/theoctocat.png";

const User = () => {
  return (
    <div className="flex flex-row items-center mt-10 ml-6">
      <Image
        className="rounded-full"
        src={OCTOCAT}
        width={117}
        height={117}
        alt="Picture of the author"
      />
      <div className="flex lg:flex-row flex-col justify-around lg:justify-between items-baseline mx-10 px-2">
        <div className="flex flex-col">
          <h1 className="text-lm-dark-grey dark:text-dm-white">The Octocat</h1>
          <h3 className="text-lm-light-blue dark:text-dm-light-blue py-1">
            @octocat
          </h3>
        </div>
        <h3 className="text-lm-grey dark:text-dm-white lg:ml-32">
          Joined 25 Jan 2011
        </h3>
      </div>
    </div>
  );
};

export default User;