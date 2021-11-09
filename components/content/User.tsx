import Image from "next/image";

import OCTOCAT from "../../public/theoctocat.png";

interface IUser {
  name: string;
  login: string;
  joined: string;
  avatarUrl: string;
}

const User = ({ name, login, joined, avatarUrl }: IUser) => {
  console.log(avatarUrl);
  return (
    <div className="flex flex-row items-center mt-10 ml-6">
      <Image
        className="rounded-full"
        src={avatarUrl ? avatarUrl : OCTOCAT}
        width={117}
        height={117}
        alt="Picture of the author"
      />
      <div className="flex lg:flex-row flex-col justify-around lg:justify-between items-baseline mx-10 px-2">
        <div className="flex flex-col">
          <h1 className="text-lm-dark-grey dark:text-dm-white">{name}</h1>
          <h3 className="text-lm-light-blue dark:text-dm-light-blue py-1">
            @{login}
          </h3>
        </div>
        <h3 className="text-lm-grey dark:text-dm-white lg:ml-32">
          Joined{" "}
          {new Date(joined).toLocaleString("en-US", {
            weekday: "short",
            day: "numeric",
            year: "numeric",
          })}
        </h3>
      </div>
    </div>
  );
};

export default User;
