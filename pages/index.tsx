import type { NextPage } from "next";
import Head from "next/head";

import LightDarkToggle from "../components/LightDarkToggle";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <div className="bg-lm-light-grey dark:bg-dm-black-blue min-w-screen min-h-screen">
      <Head>
        <title>Github User Search</title>
        <meta
          name="description"
          content="Search for your favorite Github user."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center lg:w-[730px] md:w-[573px]">
          <h1 className="dark:text-dm-white">devfinder</h1>
          <LightDarkToggle />
        </div>
        <div className="lg:w-[730px] md:w-[573px] mt-10">
          <SearchBar />
        </div>
        {/* Body component */}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
