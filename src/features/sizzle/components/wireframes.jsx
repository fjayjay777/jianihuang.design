import { useRef } from "react";
import SvgButton from "../../shared/components/svg_button";
import RightArrow from "../../../assets/imgs/right-arrow2.svg";
import LeftArrow from "../../../assets/imgs/left-arrow.svg";
import wireframe1 from "../../../assets/imgs/wireframe-1.svg";
import wireframe2 from "../../../assets/imgs/wireframe-2.svg";
import wireframe3 from "../../../assets/imgs/wireframe-3.svg";
import wireframe4 from "../../../assets/imgs/wireframe-4.svg";
import wireframe5 from "../../../assets/imgs/wireframe-5.svg";
import wireframe6 from "../../../assets/imgs/wireframe-6.svg";
import wireframe7 from "../../../assets/imgs/wireframe-7.svg";
import wireframe8 from "../../../assets/imgs/wireframe-8.svg";
import wireframe9 from "../../../assets/imgs/wireframe-9.svg";
import wireframe10 from "../../../assets/imgs/wireframe-10.svg";
import wireframe11 from "../../../assets/imgs/wireframe-11.svg";
import wireframe12 from "../../../assets/imgs/wireframe-12.svg";

const Wireframes = ({ id }) => {
  const scrollContainerRef = useRef(null);

  const scrollImages = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = 371;
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  return (
    <div id={id} className="flex flex-col mb-20 w-[1120px]">
      <h2
        className="text-2xl font-bold mb-10 ml-16"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Wireframes
      </h2>
      <div className="flex gap-8">
        <SvgButton
          svgChild={
            <img src={LeftArrow} alt="" className="h-[35px] w-[70px]" />
          }
          onClick={() => scrollImages(-1)}
        />
        <div className="flex gap-3 overflow-x-scroll" ref={scrollContainerRef}>
          <img src={wireframe1} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe2} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe3} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe4} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe5} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe6} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe7} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe8} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe9} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe10} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe11} alt="" className="w-[181px] h-[371px]" />
          <img src={wireframe12} alt="" className="w-[181px] h-[371px]" />
        </div>
        <SvgButton
          svgChild={
            <img src={RightArrow} alt="" className="h-[35px] w-[70px]" />
          }
          onClick={() => scrollImages(1)}
        />
      </div>
    </div>
  );
};

export default Wireframes;
