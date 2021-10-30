import type { NextPage } from "next";
import Head from "next/head";

import LightDarkComponent from "../components/LightDarkComponent";

const Home: NextPage = () => {
  return (
    <div className="bg-dm-black-blue min-w-screen min-h-screen">
      <Head>
        <title>Github User Search</title>
        <meta
          name="description"
          content="Search for your favorite Github user."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="min-h-screen flex justify-center items-center">
        <div className="flex flex-row justify-between items-end lg:w-[730px] md:w-[573px] sm:w-[327px]">
          <h1 className="text-dm-white">devfinder</h1>
          <LightDarkComponent />
        </div>
        {/* Search component */}
        {/* Body component */}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
