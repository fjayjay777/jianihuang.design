import HiFi1 from "../../../assets/imgs/hi-fi-1.svg";
import HiFi2 from "../../../assets/imgs/hi-fi-2.svg";
import HiFi3 from "../../../assets/imgs/hi-fi-3.svg";
import HiFi4 from "../../../assets/imgs/hi-fi-4.svg";
import HiFi5 from "../../../assets/imgs/hi-fi-5.svg";
import HiFi6 from "../../../assets/imgs/hi-fi-6.svg";
import HiFi7 from "../../../assets/imgs/hi-fi-7.svg";
import HiFi8 from "../../../assets/imgs/hi-fi-8.svg";
import HiFi9 from "../../../assets/imgs/hi-fi-9.svg";
import HiFi10 from "../../../assets/imgs/hi-fi-10.svg";
import HiFi11 from "../../../assets/imgs/hi-fi-11.svg";
import HiFi12 from "../../../assets/imgs/hi-fi-12.svg";
import HiFi13 from "../../../assets/imgs/hi-fi-13.svg";
import { useRef } from "react";
import SvgButton from "../../shared/components/svg_button";
import RightArrow from "../../../assets/imgs/right-arrow2.svg";
import LeftArrow from "../../../assets/imgs/left-arrow.svg";

const HiFiPrototypes = ({ id }) => {
  const scrollContainerRef = useRef(null);

  const scrollImages = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 371;
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  return (
    <div id={id} className="w-[1120px] mb-20">
      <h2
        className="text-2xl font-extrabold mb-10 ml-16"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Hi-Fi Prototypes
      </h2>
      <div className="flex gap-8">
        <SvgButton
          svgChild={
            <img src={LeftArrow} alt="" className="h-[35px] w-[70px]" />
          }
          onClick={() => scrollImages(-1)}
        />
        <div className="flex gap-3 overflow-x-scroll" ref={scrollContainerRef}>
          <img src={HiFi1} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi2} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi3} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi4} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi5} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi6} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi7} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi8} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi9} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi10} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi11} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi12} alt="" className="w-[181px] h-[371px]" />
          <img src={HiFi13} alt="" className="w-[181px] h-[371px]" />
        </div>
        <SvgButton
          svgChild={
            <img src={RightArrow} alt="" className="h-[35px] w-[70px]" />
          }
          onClick={() => scrollImages(1)}
        />
      </div>
      <h2 className="mt-10 ml-16 text-lg" style={{ fontFamily: "Helvetica" }}>
        👀 Use this &nbsp;
        <a href="wwww.jianihuang.design" className="text-[#FFB803]">
          link &nbsp;
        </a>
        to see details!
      </h2>
    </div>
  );
};

export default HiFiPrototypes;
