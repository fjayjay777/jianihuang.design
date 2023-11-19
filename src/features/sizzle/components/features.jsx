import Intro1 from "../../../assets/imgs/intro-1.svg";
import Intro2 from "../../../assets/imgs/intro-2.svg";
import Intro3 from "../../../assets/imgs/intro-3.svg";
import Intro4 from "../../../assets/imgs/intro-4.svg";

function Features({ id }) {
  return (
    <div id={id} className="mb-20 w-[1000px]">
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        What Can Sizzle Do For Our Users
      </h2>
      <div className="flex gap-20">
        <Feature
          title={"Find Groups"}
          image={Intro1}
          content={
            "Join your interested groups or create your own group in Sizzle to chat with others about everything you’d like to share! "
          }
          imgHeight={390}
          imgWidth={420}
        />
        <Feature
          title={"Plan Your Meals"}
          image={Intro2}
          content={
            "Struggle to decide what you gonna eat next week? Need to have a fitness meal plan for weight loss? Meal plan in Sizzle can help you build a perfect plan which fits your daily routines to improve the quality of your life! We also craft our recommendations based on your own interests!"
          }
          imgHeight={420}
          imgWidth={200}
        />
      </div>
      <div className="flex gap-20 mt-10">
        <Feature
          title={"Better Searching"}
          image={Intro3}
          content={
            "A clear and organized arrangement of ingredients can help you quickly choose a recipe based on the chosen ingredients, search for the recipes that you can cook right away."
          }
          imgHeight={430}
          imgWidth={200}
        />
        <Feature
          title={"Discover"}
          image={Intro4}
          content={
            "Trending and topics section will let you know what’s the most popular related recipes over the week in the world, follow the hot topics to enjoy yummy food! "
          }
          imgHeight={430}
          imgWidth={450}
        />
      </div>
      <div className="flex gap-20 mt-10">
        <Feature
          title={"Share Your Recipes"}
          image={Intro3}
          content={
            "Create the recipes of your own, share with other users, make profits."
          }
          imgHeight={430}
          imgWidth={200}
        />
        <Feature
          title={"Your Own Recipe Collections"}
          image={Intro4}
          content={
            "Make your own recipe books, save the recipes that you like, and share the collections with others."
          }
          imgHeight={430}
          imgWidth={450}
        />
      </div>
    </div>
  );
}

function Feature({ title, image, content, imgHeight, imgWidth }) {
  return (
    <div
      className="flex flex-col"
      style={{
        fontFamily: "Helvetica",
      }}
    >
      <img src={image} alt="" className="h-96 w-96 mb-10" />
      <div className="w-[450px]">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="leading-9 tracking-wide">{content}</p>
      </div>
    </div>
  );
}

export default Features;
