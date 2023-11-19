function PainPoints({ id }) {
  return (
    <div id={id} className="flex flex-col mb-20 w-[1000px]">
      <h2
        className="text-2xl font-extrabold mb-10"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Pain Points
      </h2>
      <div className="flex gap-16 mb-7">
        <Point
          color={"#FF9696"}
          number={1}
          content={
            "Recipes are not organized, tagged very well. The boundary on each catalogs are usually vague."
          }
        />
        <Point
          color={"#FFCBDE"}
          number={2}
          content={
            "Users find it challenging to interact with recipe authors or other users."
          }
        />
        <Point
          color={"#D8C6FF"}
          number={3}
          content={"Users couldn't find any options to share their creations."}
        />
      </div>
      <div className="flex gap-16">
        <Point
          color={"#BCCFFF"}
          number={4}
          content={
            "Options for recipes are normally limited for users, and usually not beginner-friendly."
          }
        />
        <Point
          color={"#FFD596"}
          number={5}
          content={
            "There are excessive advertisements and fragmented information, making it difficult to find correct information."
          }
        />
        <Point
          color={"#FFAF8D"}
          number={6}
          content={
            "Users need a place to share their thoughts, feedbacks, or simply a place for them to communicate."
          }
        />
      </div>
    </div>
  );
}

function Circle({ color, number }) {
  return (
    <div
      className="h-14 w-14 rounded-full flex items-center justify-center text-2xl text-white"
      style={{ backgroundColor: color, fontFamily: "Hiragino Mincho Pro" }}
    >
      {number}
    </div>
  );
}

function Point({ color, number, content }) {
  return (
    <div className="flex flex-col items-center w-[350px]">
      <Circle color={color} number={number} />
      <p
        className="mt-8 text-base leading-8 tracking-wide"
        style={{ fontFamily: "Helvetica" }}
      >
        {content}
      </p>
    </div>
  );
}

export default PainPoints;
