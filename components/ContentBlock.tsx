import User from "./content/User";
import Stats from "./content/Stats";
import Footer from "./content/Footer";

interface IContentBlock {
  userData: {
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
  };
}

const ContentBlock = ({ userData }: IContentBlock) => {
  return (
    <div className="rounded-xl flex flex-col md:justify-between bg-lm-white dark:bg-dm-blue shadow-xl mb-6 md:mb-0">
      <User
        name={userData?.name}
        login={userData?.login}
        joined={userData?.created_at}
        avatarUrl={userData?.avatar_url}
      />
      <p className="mx-6 xl:ml-48 lg:ml-36 my-5 text-lm-grey dark:text-dm-white">
        {userData?.bio}
      </p>
      <Stats
        repos={userData?.public_repos}
        followers={userData?.followers}
        following={userData?.following}
      />
      <Footer
        blog={userData?.blog}
        location={userData?.location}
        twitter={userData?.twitter_username}
        company={userData?.company}
      />
    </div>
  );
};

export default ContentBlock;
