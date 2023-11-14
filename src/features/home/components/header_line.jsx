import HeartSVG from "../../../assets/imgs/heart.svg";

function Headline() {
  return (
    <>
      <div
        style={{
          fontFamily: "KarmaticArcade",
          color: "#FFB2CE",
          fontSize: "50px",
          display: "flex",
        }}
      >
        HI, THERE .
      </div>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div
          style={{
            fontFamily: "KarmaticArcade",
            color: "#FFB2CE",
            fontSize: "50px",
          }}
        >
          I AM &nbsp;
        </div>
        <img
          src={HeartSVG}
          alt=""
          style={{
            width: "50px",
            height: "20px",
            marginTop: "30px",
            marginLeft: "10px",
          }}
        />
        <div
          style={{
            fontFamily: "ArcadeClassic",
            color: "#FF5E95",
            fontSize: "75px",
          }}
        >
          JIANI HUANG
        </div>
        <img src={HeartSVG} alt="" style={{ width: "50px", height: "20px" }} />
      </div>
      <div
        style={{
          fontFamily: "KarmaticArcade",
          color: "#FFB2CE",
          fontSize: "40px",
          marginTop: "11px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        AN
        <span
          style={{
            fontFamily: "ArcadeClassic",
            color: "#FF5E95",
            fontSize: "75px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          UI UX
        </span>
        <span>DESIGNER . &nbsp; </span>
        <div
          style={{
            fontFamily: "KarmaticArcade",
            color: "#FFB2CE",
            fontSize: "20px",
            marginTop: "11px",
          }}
        >
          AND A CAT LOVER
        </div>
      </div>
    </>
  );
}

export default Headline;
