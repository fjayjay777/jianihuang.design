function Summary({ id }) {
  return (
    <div
      id={id}
      className="mb-20 max-w-[1000px]"
      style={{ fontFamily: "Hiragino Mincho Pro" }}
    >
      <h2 className="text-2xl font-extrabold mb-10">User Research Summary</h2>
      <p
        className="leading-8 tracking-wide"
        style={{ fontFamily: "Helvetica" }}
      >
        This project aims to tackle the problem encountered by the majority of
        current users of cooking-related applications who struggle to find an
        efficient means of sharing their ideas and creations online.
        Additionally, we intend to introduce additional features and create a
        comprehensive ecosystem for cooking enthusiasts to build a community and
        expand their social circles. The study will delve into the business
        potential of a user-centric feature and seek to answer how technology
        can be seamlessly integrated into daily life to enhance people's quality
        of life.
      </p>
    </div>
  );
}

export default Summary;
