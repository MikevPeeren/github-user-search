interface IStats {
  repos: string;
  followers: string;
  following: string;
}

const Stats = ({ repos, followers, following }: IStats) => {
  return (
    <div className="flex flex-row justify-between md:items-center md:px-10 px-4 h-[85px] bg-lm-light-grey dark:bg-dm-black-blue mx-6 mb-10 lg:ml-48 rounded-xl shadow-xl">
      <div className="flex flex-col justify-around md:justify-between md:items-center">
        <h4 className="text-lm-blue dark:text-dm-white">Repos</h4>
        <h2 className="text-lm-dark-grey dark:text-dm-white">{repos}</h2>
      </div>
      <div className="flex flex-col justify-around md:justify-between md:items-center">
        <h4 className="text-lm-blue dark:text-dm-white">Followers</h4>
        <h2 className="text-lm-dark-grey dark:text-dm-white">{followers}</h2>
      </div>
      <div className="flex flex-col justify-around md:justify-between md:items-center">
        <h4 className="text-lm-blue dark:text-dm-white">Following</h4>
        <h2 className="text-lm-dark-grey dark:text-dm-white">{following}</h2>
      </div>
    </div>
  );
};

export default Stats;
