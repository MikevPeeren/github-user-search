import User from "./content/User";
import Stats from "./content/Stats";
import Footer from "./content/Footer";

const ContentBlock = () => {
  return (
    <div className="rounded-xl flex flex-col md:justify-between bg-lm-white dark:bg-dm-blue shadow-xl">
      <User />
      <p className="mx-6 lg:ml-48 my-5 text-lm-grey dark:text-dm-white">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
      <Stats />
      <Footer />
    </div>
  );
};

export default ContentBlock;
