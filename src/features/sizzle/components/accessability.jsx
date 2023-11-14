const Accessability = ({ id }) => {
  return (
    <div id={id} className="w-[1000px] mb-20">
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Accessibility Testing / Considerations
      </h2>
      <div>
        <Considerations />
      </div>
    </div>
  );
};

const Considerations = () => {
  return (
    <div style={{ fontFamily: "Helvetica" }}>
      <div className="rounded-xl">
        <ul className="marker:text-[#FF9696] list-outside list-disc ml-4">
          <li className="mb-3">
            We considered using different fonts to distinguish the title from
            the body of the text. This would help people, including those with
            dyslexia, to better understand the content.
          </li>
          <li className="mb-3">
            We considered implementing a function that allows users to zoom in
            and out on picture sizes to assist those with visual impairments.
          </li>
          <li className="mb-3">
            We relocated the search bar from the bottom of the navigation bar to
            better align with people's familiar position when holding their
            phone.
          </li>
          <li className="mb-3">
            We create a feature that allows double taps to avoid accidental icon
            clicks.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Accessability;
