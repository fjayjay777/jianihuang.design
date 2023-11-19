function ProjectBrief({ id }) {
  return (
    <div id={id} className="flex w-[1000px] gap-16 mb-20">
      <div className="flex-1">
        <h2
          className="text-2xl font-extrabold mb-7"
          style={{ fontFamily: "Hiragino Mincho Pro" }}
        >
          Project Problem Statement
        </h2>
        <article
          className="leading-9 tracking-wide text-start"
          style={{ fontFamily: "Helvetica" }}
        >
          <p>
            The current applications in the market cannot meet the users' demand
            for sharing recipes, and there is no place for users to engage in
            discussions. Most recipe apps merely serve as electronic collections
            of recipes, with almost all content controlled by the manufacturers.
            Users are unable to provide feedback for other users to distinguish
            the quality of recipes. Additionally, the search and recommendation
            systems in most recipe apps cannot be customized according to users'
            individual preferences.
          </p>
        </article>
      </div>
      <div className="flex-1">
        <h2
          className="text-2xl font-extrabold mb-7"
          style={{ fontFamily: "Hiragino Mincho Pro" }}
        >
          Project Goal
        </h2>
        <article
          className="leading-9 tracking-wide text-start"
          style={{ fontFamily: "Helvetica" }}
        >
          <p>
            Sizzle aims to provide a healthy, comprehensive, and well-defined
            ecosystem for those who are passionate about cooking or eager to
            learn, allowing them to share their creations, foster communication,
            and generate profits from their work. The establishment of Sizzle
            not only enhances users' internet experience and opportunities for
            interaction but also aligns with the contemporary trends in the age
            of social medias, making people's lives more convenient. It
            seamlessly integrates daily routines with the internet, promoting a
            regular, efficient, and worry-free lifestyle.
          </p>
        </article>
      </div>
    </div>
  );
}

export default ProjectBrief;
