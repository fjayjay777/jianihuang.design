function Navbar({ darkMode = false, id }) {
  const textColor = darkMode ? "#3A3A3A" : "white";
  return (
    <div
      id={id}
      className="flex justify-between items-center pt-10 mb-14 w-full px-20"
    >
      <div className="flex items-center">
        <HomeButton textStyle={{ textColor }} />
      </div>
      <div className="flex justify-end items-end">
        <LinkButton name={"HOME"} />
        <LinkButton name={"RESUME"} />
        <LinkButton name={"PROJECTS"} />
        <LinkButton name={"ARTWORK"} />
      </div>
    </div>
  );
}

function LinkButton({ name, link, textColor }) {
  return (
    <div
      className="text-[#FF86AF] text-3xl mx-4"
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
