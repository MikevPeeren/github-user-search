import Image from "next/image";

import OCTOCAT from "../../public/theoctocat.png";

interface IUser {
  name?: string;
  login?: string;
  joined?: string;
  avatarUrl?: string;
}

const User = ({ name, login, joined, avatarUrl }: IUser) => {
  return (
    <div className="flex flex-row items-center w-full mt-10">
      <div className="flex flex-row items-start pl-4 lg:w-2/6 md:w-2/6 sm:w-2/6 w-full">
        <Image
          className="rounded-full"
          src={avatarUrl ? avatarUrl : OCTOCAT}
          width={117}
          height={117}
          alt="Picture of the author"
        />
      </div>
      <div className="lg:w-5/6 md:w-5/6 sm:w-full w-5/6 mx-6 md:mx-8 pl-[0.5rem]">
        <div className="flex lg:flex-row flex-col justify-around lg:justify-between items-start">
          <div className="flex flex-col">
            <h1 className="text-lm-dark-grey dark:text-dm-white">
              {name ? name : "The Octocat"}
            </h1>
            <h2 className="text-lm-light-blue dark:text-dm-light-blue py-1">
              @{login ? login : "octocat"}
            </h2>
          </div>
          <h3 className="text-lm-grey dark:text-dm-white lg:ml-32">
            Joined{" "}
            {joined
              ? new Date(joined).toLocaleString("en-US", {
                  weekday: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "25 Tue 2011"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default User;
