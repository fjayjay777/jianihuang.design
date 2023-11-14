import SiteMapImg from "../../../assets/imgs/site-map.jpeg";

const SiteMap = ({ id }) => {
  return (
    <div id={id} className="flex flex-col mb-20 w-[1000px]">
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Site Map
      </h2>
      <img src={SiteMapImg} alt="" className="rounded-xl" />
      <h2 className="mt-7 text-lg" style={{ fontFamily: "Helvetica" }}>
        👀 Use this &nbsp;
        <a href="wwww.jianihuang.design" className="text-[#FFB803]">
          link &nbsp;
        </a>
        to see details!
      </h2>
    </div>
  );
};

export default SiteMap;
