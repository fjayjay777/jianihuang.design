import Intro1 from "../../../assets/imgs/intro-1.svg";
import Intro2 from "../../../assets/imgs/intro-2.svg";
import Intro3 from "../../../assets/imgs/intro-3.svg";
import Intro4 from "../../../assets/imgs/intro-4.svg";

function Features({ id }) {
  return (
    <div id={id} className="flex-col mb-20 w-[1000px]">
      <h2
        className="text-2xl font-extrabold mb-7"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        What Can Sizzle Do For Our Users
      </h2>
      <div className="flex gap-20">
        <Feature
          title={"Group Feature"}
          image={Intro1}
          content={
            "Join your interested groups or create your own group in Sizzle to chat with others about everything you’d like to share! "
          }
          imgHeight={390}
          imgWidth={420}
        />
        <Feature
          title={"Mealplan"}
          image={Intro2}
          content={
            "Struggle to decide what you gonna eat next week? Need to have a fitness meal plan for weight loss? Meal plan feature in Sizzle can help you build a perfect plan which fits your daily routines to improve the quality of your life!"
          }
          imgHeight={420}
          imgWidth={200}
        />
      </div>
      <div className="flex gap-20 mt-10">
        <Feature
          title={"Clear Category"}
          image={Intro3}
          content={
            "A clear and organized arrangement of ingredients can help you quickly choose a recipe based on your existing ingredients."
          }
          imgHeight={430}
          imgWidth={200}
        />
        <Feature
          title={"Trendings"}
          image={Intro4}
          content={
            "Trending and topics section will let you know what’s the most popular related recipes over the week. follow the hot topics to enjoy Yummly food! "
          }
          imgHeight={430}
          imgWidth={450}
        />
      </div>
    </div>
  );
}

function Feature({ title, image, content, imgHeight, imgWidth, otherStyle }) {
  return (
    <div
      className="flex flex-col rounded-xl justify-center items-center align-middle"
      style={{
        fontFamily: "Helvetica",
      }}
    >
      <div style={{ width: imgWidth, height: imgHeight, ...otherStyle }}>
        <img src={image} alt="" />
      </div>
      <div className="w-[450px]">
        <h2 className="text-xl font-bold leading-10 tracking-wide">{title}</h2>
        <p className="leading-9 tracking-wide">{content}</p>
      </div>
    </div>
  );
}

export default Features;
