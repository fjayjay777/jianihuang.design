const UseabilityTestingFindings = ({ id }) => {
  return (
    <div id={id} className="flex flex-col mb-20 w-[1000px]">
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Usability Testing Findings
      </h2>
      <RoundOneFindings />
      <RoundTwoFindings />
    </div>
  );
};

const RoundOneFindings = () => {
  return (
    <div style={{ fontFamily: "Helvetica" }}>
      <h2 className="font-bold" style={{ fontFamily: "Hiragino Mincho Pro" }}>
        Round one findings
      </h2>
      <div className="rounded-xl mt-4">
        <ul className="marker:text-[#FF9696] list-outside list-disc">
          <li className="mb-3">
            Some buttons are too small or not protruded enough, people can lose
            target
          </li>
          <li className="mb-3">
            Users have difficulty discerning the disparity between the topic
            screen and the threads screen, as they perceive the content in both
            to be quite similar.
          </li>
          <li className="mb-3">
            Users believe that the recipe page has a clear and user-friendly
            structure but are unsure about how to provide feedback and rate
            recipes.
          </li>
          <li className="mb-3">
            Users believe that providing instructions the first time they use
            Sizzle would be helpful to improve their experience.
          </li>
          <li className="mb-3">
            Some directional texts in the app are excessively verbose and occupy
            significant space.
          </li>
          <li className="mb-3">
            The rating section on the detailed recipe screen raises some
            questions because of its unclear layout and language usage.
          </li>
          <li className="mb-3">
            Users are pleased to observe icons replacing text as guidance, but
            the spacing is too cramped, often inadvertently redirecting users to
            other screens.
          </li>
        </ul>
      </div>
    </div>
  );
};

const RoundTwoFindings = () => {
  return (
    <div style={{ fontFamily: "Helvetica" }} className="mt-10">
      <h2 className="font-bold" style={{ fontFamily: "Hiragino Mincho Pro" }}>
        Round two findings
      </h2>
      <div className="rounded-xl mt-4">
        <ul className="marker:text-[#FFD596] list-outside list-disc">
          <li className="mb-3">
            After I repositioned some icons and introduced features that allow
            users to zoom in and out of pictures, they have noticed a
            significant improvement in their experience.
          </li>
          <li className="mb-3">
            I enhanced my UX writing and provided more concise yet easily
            understandable prompts in my project. As a result of these
            improvements, I observed that users, even those using our app for
            the first time, quickly became more familiar with it.
          </li>
          <li className="mb-3">
            I reorganized some sections of my app and adjusted the spacing
            between different layouts. I discovered that maintaining a
            reasonable distance between different sections significantly
            enhances the user experience.
          </li>
          <li className="mb-3">
            Making the UX writing to be concise yet clear allows users to more
            efficiently achieve their objectives when using the app.
          </li>
          <li className="mb-3">
            A well-organized and clearly prioritized layout of features makes
            the distribution of page content more coherent, allowing users to
            swiftly access essential information.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseabilityTestingFindings;
