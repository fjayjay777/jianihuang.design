import Persona1 from "../../../assets/imgs/persona1.png";
import Persona2 from "../../../assets/imgs/persona2.png";
import Persona3 from "../../../assets/imgs/persona3.png";

const Persona = ({ id }) => {
  return (
    <div id={id} className="flex-col mb-20 w-[1000px]">
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        User Research Personas
      </h2>
      <img src={Persona1} alt="" className="h-[700px] w-full rounded-sm" />
      <img src={Persona2} alt="" className="h-[700px] w-full rounded-sm mt-7" />
      <img src={Persona3} alt="" className="h-[700px] w-full rounded-sm mt-7" />
    </div>
  );
};

export default Persona;
