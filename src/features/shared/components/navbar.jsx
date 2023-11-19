import { useState } from "react";
import HamburgerMenu from "../../../assets/imgs/hamburger-menu.svg";

function Navbar({ darkMode = false, id }) {
  const textColor = darkMode ? "#3A3A3A" : "white";
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      id={id}
      className="flex justify-between items-center pt-10 mb-14 w-full px-20"
    >
      <div className="flex items-center">
        <HomeButton textStyle={{ textColor }} />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <img src={HamburgerMenu} alt="Hamburger Menu" className="w-6 h-6" />
        </button>
      </div>
      <div className="hidden lg:flex justify-end items-end">
        <LinkButton name={"HOME"} />
        <LinkButton name={"RESUME"} />
        <LinkButton name={"ARTWORK"} />
      </div>
      {openMenu && (
        <div className="lg:hidden">
          <LinkButton name={"HOME"} textColor={textColor} />
          <LinkButton name={"RESUME"} textColor={textColor} />
          <LinkButton name={"ARTWORK"} textColor={textColor} />
        </div>
      )}
    </div>
  );
}

function LinkButton({ name, link, textColor }) {
  return (
    <div
      className="text-[#FF86AF] text-3xl lg:mx-4"
      style={{
        fontFamily: "ArcadeClassic",
        color: textColor,
      }}
    >
      {name}
    </div>
  );
}

function HomeButton({ textStyle }) {
  return (
    <div
      className="text-3xl"
      style={{
        fontFamily: "KarmaticArcade",
        color: textStyle,
      }}
    >
      JN_HUANG !
    </div>
  );
}

export default Navbar;
