import SiteMap from "../../../assets/imgs/site-map.jpeg";

const UserFlow = ({ id }) => {
  return (
    <div id={id} className="flex-col mb-20 w-[1000px]">
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        User Flow
      </h2>
      <Explorer />
      <img src={SiteMap} alt="" className="rounded-xl mt-7" />
    </div>
  );
};

const Explorer = () => {
  return (
    <div
      className="flex items-center gap-8"
      style={{ fontFamily: "Helvetica" }}
    >
      <h3 className=" text-xl">Tasks</h3>
      <button className="bg-[#FFEAC7] px-5 py-1 rounded-xl text-base">
        Explore More 🔽
      </button>
    </div>
  );
};

export default UserFlow;
