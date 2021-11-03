import { useEffect, useState } from "react";

import Image from "next/image";

import MOON from "../public/icon-moon.svg";
import SUN from "../public/icon-sun.svg";

const LightDarkToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("githubProfileDarkMode", "true");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("githubProfileDarkMode", "false");
    }
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-row justify-center">
      {darkMode ? (
        <>
          <h4 className="text-dm-white mx-4">Light</h4>
          <Image
            className="hover:cursor-pointer"
            src={SUN}
            alt="Picture of a sun"
            onClick={() => handleThemeChange()}
          />
        </>
      ) : (
        <>
          <h4 className="text-lm-grey mx-4">Dark</h4>
          <Image
            className="hover:cursor-pointer"
            src={MOON}
            alt="Picture of a moon"
            onClick={() => handleThemeChange()}
          />
        </>
      )}
    </div>
  );
};

export default LightDarkToggle;
