interface IStats {
  repos?: string;
  followers?: string;
  following?: string;
}

const Stats = ({ repos, followers, following }: IStats) => {
  return (
    <div className="flex flex-row justify-between md:items-center md:px-10 px-4 h-[85px] bg-lm-light-grey dark:bg-dm-black-blue mx-2 mb-10 lg:mx-8 lg:w-5/6 md:w-full w-full rounded-xl shadow-xl">
      <dl className="flex flex-col justify-around md:justify-between md:items-center">
        <dt className="text-lm-blue dark:text-dm-white">Repos</dt>
        <dd className="text-lm-dark-grey dark:text-dm-white">
          {repos ? repos : 8}
        </dd>
      </dl>
      <dl className="flex flex-col justify-around md:justify-between md:items-center">
        <dt className="text-lm-blue dark:text-dm-white">Followers</dt>
        <dd className="text-lm-dark-grey dark:text-dm-white">
          {followers ? followers : 4152}
        </dd>
      </dl>
      <dl className="flex flex-col justify-around md:justify-between md:items-center">
        <dt className="text-lm-blue dark:text-dm-white">Following</dt>
        <dd className="text-lm-dark-grey dark:text-dm-white">
          {following ? following : 9}
        </dd>
      </dl>
    </div>
  );
};

export default Stats;
