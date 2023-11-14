import SizzleHeader from "../../../assets/imgs/sizzle-header.svg";

function Header({ id }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #FFE7C3 18.41%, rgba(255, 215, 227, 0.30) 99.99%, rgba(255, 195, 213, 0.29) 100%)",
      }}
      className="w-10/12 h-[558px] rounded-xl relative overflow-visible mb-32"
      id={id}
    >
      <img
        src={SizzleHeader}
        alt=""
        loading="lazy"
        className="absolute bottom-[-27.3px]"
      />
      <div className="text-start absolute left-[500px]">
        <div className="flex-col mt-10">
          <h1
            className=" text-8xl"
            style={{ fontFamily: "Hiragino Mincho Pro" }}
          >
            Sizzle
          </h1>
          <h2
            className="text-2xl font-semibold mt-8"
            style={{ fontFamily: "Helvetica" }}
          >
            “ Where Every Dish Begins ”
          </h2>
          <p
            className="text-lg leading-9 tracking-wide mt-14 max-w-[600px]"
            style={{ fontFamily: "Helvetica" }}
          >
            Sizzle is a user-centric recipe sharing social platform where users
            can create, record, and share their own recipes.Sizzle aims to
            provide a healthy, comprehensive, and well-defined ecosystem for
            those who are passionate about cooking or eager to learn, allowing
            them to share their creations, foster communication, and generate
            profits from their work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
