function SelfIntro({ id }) {
  return (
    <div
      id={id}
      className="flex w-[1000px] mb-20"
      style={{ fontFamily: "Helvetica" }}
    >
      <div className="flex-col flex-1">
        <h2
          className="text-2xl font-extrabold  text-start"
          style={{ fontFamily: "Hiragino Mincho Pro" }}
        >
          Duration
        </h2>
        <p className="mt-4 pr-4">
          May 2023 - October 2023 <br /> (5 months)
        </p>
      </div>
      <div className="flex-col flex-1">
        <h2
          className="text-2xl font-extrabold text-start"
          style={{ fontFamily: "Hiragino Mincho Pro" }}
        >
          My Roles
        </h2>
        <p className="leading-8 tracking-wide mt-4 text-start">
          UI Designer <br />
          UX Researcher <br />
          UX Writer <br />
          Visual Designer <br />
          Product Manager
        </p>
      </div>
      <div className="flex-col flex-1">
        <h2
          className="text-2xl font-extrabold text-start"
          style={{ fontFamily: "Hiragino Mincho Pro" }}
        >
          Tools
        </h2>
        <p className="leading-8 tracking-wide mt-4 text-start">
          Figma
          <br />
          PhotoShop <br />
          Illustrator <br />
          TeamOClock
        </p>
      </div>
      <div className="flex-col flex-1">
        <h2
          className="text-2xl font-extrabold text-start"
          style={{ fontFamily: "Hiragino Mincho Pro" }}
        >
          Works
        </h2>
        <p className="leading-8 tracking-wide mt-4 text-start pr-12">
          Illustrate design ideas, visual design, user experience research,
          wireframing, prototyping, user flow, testing, collect feedbacks
        </p>
      </div>
    </div>
  );
}

export default SelfIntro;
