import { useState, useEffect } from "react";

import type { NextPage } from "next";
import Head from "next/head";

import LightDarkToggle from "../components/LightDarkToggle";
import SearchBar from "../components/SearchBar";
import ContentBlock from "../components/ContentBlock";

const Home: NextPage = () => {
  const [userData, setUserData] = useState();
  const [noUser, setNoUser] = useState(false);

  useEffect(() => {
    // Default Display
    handleSubmit("octocat");
  }, []);

  const handleSubmit = async (username: string) => {
    const response = await fetch(`/api/github/${username}`);
    const data = await response.json();

    if (data.message) setNoUser(true);
    else {
      setNoUser(false);
      setUserData(data);
    }
  };

  return (
    <div className="bg-lm-light-grey dark:bg-dm-black-blue">
      <Head>
        <title>Github User Search</title>
        <meta
          name="description"
          content="Search for your favorite Github user."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="min-w-screen min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center 2xl:w-5/12 lg:w-7/12 md:w-8/12 w-11/12 md:mt-0 mt-4">
          <h1 className="dark:text-dm-white">devfinder</h1>
          <LightDarkToggle />
        </div>
        <div className="mt-10 2xl:w-5/12 lg:w-7/12 md:w-8/12 sm:w-8/12 w-11/12">
          <SearchBar handleSubmit={handleSubmit} noUser={noUser} />
        </div>
        <div className="mt-10 2xl:w-5/12 lg:w-7/12 md:w-8/12 sm:w-8/12 w-11/12 h-4/6">
          <ContentBlock userData={userData} />
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
