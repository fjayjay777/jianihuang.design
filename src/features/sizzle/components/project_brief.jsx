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
          className="leading-9 tracking-wide rounded-xl text-start"
          style={{ fontFamily: "Helvetica" }}
        >
          <p>
            To ensure an engaging and interactive user experience in today's
            social creation development, it is imperative to address the issues
            of minimal, outdated content and the absence of social features in
            some applications. Users now require a well-structured platform that
            empowers them to both browse and share their content effectively.
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
          className="leading-9 tracking-wide rounded-xl text-start"
          style={{ fontFamily: "Helvetica" }}
        >
          <p>
            Sizzle aims to provide a healthy, comprehensive, and well-defined
            ecosystem for those who are passionate about cooking or eager to
            learn, allowing them to share their creations, foster communication,
            and generate profits from their work. The establishment of Sizzle
            not only enhances users' internet experience and opportunities for
            interaction but also aligns with the contemporary trends in the age
            of self-media, making people's lives more convenient. It seamlessly
            integrates daily routines with the internet, promoting a regular,
            efficient, and worry-free lifestyle.
          </p>
        </article>
      </div>
    </div>
  );
}

export default ProjectBrief;
