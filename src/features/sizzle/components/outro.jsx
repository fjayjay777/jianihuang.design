const Outro = ({ id }) => {
  return (
    <div id={id} className="flex gap-16 w-[1000px] mb-20">
      <Impact />
      <Learned />
    </div>
  );
};

const Impact = () => {
  return (
    <div style={{ fontFamily: "Helvetica" }}>
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Impact
      </h2>
      <p className="leading-7 tracking-wide">
        Through this usability study, we discovered that establishing a complete
        and logically clear functional system can significantly enhance the user
        experience. The importance of enhancing the user experience lies not in
        commercial goals but in constructing a fair, efficient, and empathetic
        product. It's about integrating technology into everyday life and
        seamlessly incorporating excellent products into our daily routines.
      </p>
    </div>
  );
};

const Learned = () => {
  return (
    <div style={{ fontFamily: "Helvetica" }}>
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        What I Learned
      </h2>
      <p className="leading-7 tracking-wide">
        Designs that take accessibility into consideration are more
        user-friendly and convenient. User-centered design doesn't just mean
        optimizing software functions for user convenience; it also involves
        adding features that allow users to create content independently and
        interact with one another within the software. During the testing phase,
        considering the analysis of different types of user profiles allows me
        to take into account the diverse needs of users, making the design more
        detailed and thoughtful.
      </p>
    </div>
  );
};

export default Outro;
