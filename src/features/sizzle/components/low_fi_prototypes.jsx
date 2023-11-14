import LowFi1 from "../../../assets/imgs/lofi_prototype_1.svg";
import LowFi2 from "../../../assets/imgs/lofi_prototype_2.svg";
import LowFi3 from "../../../assets/imgs/lofi_prototype_3.svg";

const LowFiPrototypes = ({ id }) => {
  return (
    <div id={id} className="flex flex-col mb-20 w-[1000px]">
      <h2
        className="text-2xl font-extrabold mb-10"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Lo-Fi Prototypes
      </h2>
      <div className="flex gap-10">
        <img src={LowFi1} alt="" className="w-[165px] h-[358px]" />
        <img src={LowFi2} alt="" className="w-[165px] h-[358px]" />
        <img src={LowFi3} alt="" className="w-[165px] h-[358px]" />
        <div className="rounded-xl flex items-center justify-center">
          <p
            className="px-4 py-2 text-base leading-8 tracking-wide"
            style={{ fontFamily: "Helvetica" }}
          >
            This is the first iteration of Sizzle. The overall design features
            clean lines and sharp, angular rectangles, contributing to a
            minimalist aesthetic. Yellow and orange served as theme colors, the
            selection of these colors is intentional, as they are known to
            stimulate the appetite and enhance user engagement. Skillful use of
            colors in visual design can significantly enhance user retention
            while maintaining a harmonious relationship between the content and
            the overall style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LowFiPrototypes;
