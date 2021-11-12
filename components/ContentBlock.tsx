import User from "./content/User";
import Stats from "./content/Stats";
import Footer from "./content/Footer";

interface IContentBlock {
  userData:
    | {
        name: string;
        login: string;
        created_at: string;
        bio: string;
        public_repos: string;
        followers: string;
        following: string;
        company: string;
        blog: string;
        location: string;
        twitter_username: string;
        avatar_url: string;
      }
    | undefined;
}

const ContentBlock = ({ userData }: IContentBlock) => {
  return (
    <div className="rounded-xl flex flex-col md:justify-between lg:items-end md:items-start sm:items-start items-start bg-lm-white dark:bg-dm-blue shadow-xl mb-6 md:mb-0">
      <User
        name={userData?.name}
        login={userData?.login}
        joined={userData?.created_at}
        avatarUrl={userData?.avatar_url}
      />
      <div className="flex flex-row items-end w-full">
        <div className="mt-10 ml-4 2xl:w-1/5 xl:w-1/5 lg:w-2/6 md:0/6 w-0/6" />
        <p className="mx-2 lg:mx-8 lg:w-5/6 md:w-full w-5/6 my-5 text-lm-grey dark:text-dm-white">
          {userData?.bio ? userData?.bio : "This user has no Bio"}
        </p>
      </div>
      <div className="flex flex-row items-end w-full">
        <div className="mt-10 ml-4 2xl:w-1/5 xl:w-1/5 lg:w-2/6 md:1/6 w-0/6" />
        <Stats
          repos={userData?.public_repos}
          followers={userData?.followers}
          following={userData?.following}
        />
      </div>
      <div className="flex flex-row items-end w-full">
        <div className="mt-10 ml-4 2xl:w-1/5 xl:w-1/5 lg:w-2/6 md:invisible md:0/6 w-0/6" />
        <Footer
          blog={userData?.blog}
          location={userData?.location}
          twitter={userData?.twitter_username}
          company={userData?.company}
        />
      </div>
    </div>
  );
};

export default ContentBlock;
