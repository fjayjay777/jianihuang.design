import "../styles/index.css";

function ProjectIntro({ projectTitle, slogan, intro, style, cover }) {
  return (
    <div
      style={{
        borderRadius: "20px",
        width: "92%",
        height: "400px",
        margin: "0 auto",
        position: "relative",
        ...style,
      }}
    >
      <div className={"project-text"}>{projectTitle}</div>
      <div className={"slogan-text"}>"{slogan}"</div>
      <div className={"intro-text"}>{intro}</div>
      <img src={cover} alt="" className={"project-cover"} />
    </div>
  );
}

export default ProjectIntro;
