import JourneyMap1 from "../../../assets/imgs/journey_map_1.jpg";
import JourneyMap2 from "../../../assets/imgs/journey_map_2.jpg";
import JourneyMap3 from "../../../assets/imgs/journey_map_3.jpg";

const UserJourneyMap = ({ id }) => {
  return (
    <div id={id} className="flex-col mb-20 w-[1000px]">
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        User Journey Map
      </h2>
      <div className="flex-col">
        <img src={JourneyMap1} alt="" className="h-[600px] w-full" />
        <img src={JourneyMap2} alt="" className="h-[600px] w-full" />
        <img src={JourneyMap3} alt="" className="h-[600px] w-full" />
      </div>
    </div>
  );
};

export default UserJourneyMap;
