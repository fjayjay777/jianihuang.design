import RightArrow from "../../../assets/imgs/right-arrow.svg";
import DownArrow from "../../../assets/imgs/down-arrow.svg";
import LowFi1 from "../../../assets/imgs/lo-fi-1.svg";
import LowFi2 from "../../../assets/imgs/lo-fi-2.svg";
import LowFi3 from "../../../assets/imgs/lo-fi-3.svg";
import LowFi4 from "../../../assets/imgs/lo-fi-4.svg";
import LowFi5 from "../../../assets/imgs/lo-fi-5.svg";
import LowFi6 from "../../../assets/imgs/lo-fi-6.svg";

const Mockups = ({ id }) => {
  return (
    <div
      id={id}
      className="w-[1000px] mb-20"
      style={{ fontFamily: "Helvetica" }}
    >
      <h2
        className="text-2xl font-extrabold mb-10"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Mockups Improvements
      </h2>
      <div className="flex-col flex gap-12">
        <div className="flex justify-between">
          <Improvement beforeImg={LowFi5} afterImage={LowFi6} />
          <div className="w-[500px] min-h-[378px] leading-7 tracking-wide">
            We have removed the ratings and tagging features based on our
            empirical findings. The study revealed that the majority of our
            participants prioritize information about how many individuals have
            prepared a given recipe. Furthermore, the initial placement of
            keyword tags at the upper-right corner of each recipe was deemed
            excessive during the usability study. I have consistently strived to
            develop auser-friendly and uncomplicated application, thus opting
            aesthetic, suggesting a preference for visually appealing content.
          </div>
        </div>
        <div className="flex justify-between">
          <Improvement beforeImg={LowFi4} afterImage={LowFi3} />
          <div className="w-[500px] min-h-[378px] leading-7 tracking-wide">
            In addition to the "Liked" and "History View" features, I have
            incorporated the "Saved" feature in the new design. This novel
            functionality aims to enhance the user experience, as a significant
            number of research participants expressed curiosity regarding the
            location of their saved recipes when exploring the initial design.
            Furthermore, I have optimized the navigation bar, diligently
            identifying the most user-friendly and ergonomic placements for
            mobile phone users.
          </div>
        </div>
        <div className="flex justify-between">
          <Improvement beforeImg={LowFi2} afterImage={LowFi1} />
          <div className="w-[500px] min-h-[378px] leading-7 tracking-wide">
            The fundamental design elements remained consistent across both
            iterations of my designs. However, I made adjustments to the size of
            each category icon to ensure an aesthetically pleasing design.
            Additionally, I relocated the search bar to the bottom navigation
            section, aligning it more closely with user habits for enhanced
            convenience.
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={DownArrow}
            alt=""
            className="h-[50px] w-[40px] flex justify-center"
          />
        </div>
      </div>
    </div>
  );
};

const Improvement = ({ beforeImg, afterImage }) => {
  return (
    <div
      className="flex items-center gap-7"
      style={{ fontFamily: "Helvetica" }}
    >
      <img src={beforeImg} alt="" className="w-[181px] h-[371px]" />
      <img src={RightArrow} alt="" className="h-[35px] w-[25px]" />
      <img src={afterImage} alt="" className="w-[181px] h-[371px]" />
    </div>
  );
};

export default Mockups;
