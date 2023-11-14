import "../styles/index.css";
import Navbar from "../../shared/components/navbar";
import GifBackground from "../../../assets/imgs/cloud-background.gif";
import ProjectIntro from "../components/projects";
import Headline from "../components/header_line";
import SizzleCover from "../../../assets/imgs/sizzle-display.svg";
import AcademixCover from "../../../assets/imgs/academix-display.svg";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#1E1E1E",
          width: "100%",
          paddingBottom: "100px",
        }}
      >
        <Navbar
          style={{
            marginLeft: "106px",
            marginRight: "40px",
            paddingTop: "40px",
          }}
        />
        <div style={{ marginTop: "133px", marginLeft: "106px" }}>
          <Headline />
        </div>
        <div style={{ display: "flex", marginTop: "100px" }}>
          <FloatingBackground gif={GifBackground} />
          <FloatingBackground gif={GifBackground} />
          <FloatingBackground gif={GifBackground} />
        </div>
        <ProjectCovers />
      </div>
    </>
  );
}

function FloatingBackground({ gif }) {
  return (
    <img src={gif} alt="background" style={{ height: "147px", width: "34%" }} />
  );
}

function ProjectCovers() {
  return (
    <div
      style={{
        backgroundColor: "#1E1E1E",
        paddingTop: "10%",
      }}
    >
      <ProjectIntro
        projectTitle={"Sizzle"}
        slogan={"Where Every Dish Begins"}
        intro={
          "Sizzle is a user-centric recipe creation and sharing social platform where users can create, record, and share their own recipes."
        }
        style={{
          border: "6px solid #FF007A",
          marginBottom: "50px",
        }}
        cover={SizzleCover}
      />
      <ProjectIntro
        projectTitle={"Academix"}
        slogan={"Navigating Knowledge, Shaping Futures."}
        intro={
          "Sizzle is a user-centric recipe creation and sharing social platform where users can create, record, and share their own recipes."
        }
        style={{ border: "6px solid #0CDFAC" }}
        cover={AcademixCover}
      />
    </div>
  );
}

export default Home;
