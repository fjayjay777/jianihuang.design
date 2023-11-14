import { useEffect, useState } from "react";
import ToTheTop from "../../../assets/imgs/to_the_top.png";

const Navigation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full fixed bottom-0">
      <div>
        <ProgressBar progress={scrollProgress} />
      </div>
      <nav
        className="flex justify-center  bg-white h-[40px] text-2xl py-8 items-center border-t-2 border-white"
        style={{ fontFamily: "ArcadeClassic", zIndex: 1000 }}
      >
        <div className="flex-1 ml-40">
          <LinkButton
            text={"Introduction"}
            onClick={() => scrollToSection("header_section")}
          />
        </div>
        <div className="flex-1">
          <LinkButton
            text={"Ideation"}
            onClick={() => scrollToSection("project_brief_section")}
          />
        </div>
        <div className="flex-1">
          <LinkButton
            text={"User Research"}
            onClick={() => scrollToSection("pain_points")}
          />
        </div>
        <div className="flex-1">
          <LinkButton
            text={"Mock Up"}
            onClick={() => scrollToSection("wireframe_section")}
          />
        </div>
        <div className="flex-1">
          <LinkButton
            text={"Testing"}
            onClick={() =>
              scrollToSection("useability_testing_findings_section")
            }
          />
        </div>
        <div className="flex-1">
          <button
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("top_section")}
          >
            <img src={ToTheTop} alt="" className="h-4" />
          </button>
        </div>
      </nav>
    </div>
  );
};

const LinkButton = ({ text, onClick }) => {
  return (
    <button style={{ cursor: "pointer" }} onClick={onClick}>
      {text}
    </button>
  );
};

const ProgressBar = ({ progress }) => {
  return (
    <div
      style={{
        width: `${progress}%`,
        height: "4px",
        backgroundColor: "orange",
        transition: "width 0.3s ease",
      }}
    ></div>
  );
};

export default Navigation;
