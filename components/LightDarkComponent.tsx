import Image from "next/image";
import MOON from "../public/icon-moon.svg";
import SUN from "../public/icon-sun.svg";

const LightDarkComponent = () => {
  return (
    <div className="flex flex-row">
      <h4 className="text-dm-white mx-4">Light</h4>
      <Image src={SUN} alt="Picture of a sun" />
    </div>
  );
};

export default LightDarkComponent;
