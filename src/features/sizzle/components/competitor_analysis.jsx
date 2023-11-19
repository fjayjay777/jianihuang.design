import YummlyLogo from "../../../assets/imgs/yummly-logo.png";
import TastyLogo from "../../../assets/imgs/tasty-logo.png";
import NYTCookingLogo from "../../../assets/imgs/nyt-cooking-logo.jpeg";
import TikTokLogo from "../../../assets/imgs/tiktok-logo.png";
import InstaLogo from "../../../assets/imgs/instagram-logo.png";

function CompetitorAnalysis({ id }) {
  return (
    <div className="flex-col mb-20 w-[1000px]" id={id}>
      <h2
        className="text-2xl font-extrabold mb-10"
        style={{ fontFamily: "Hiragino Mincho Pro" }}
      >
        Competitor Analysis
      </h2>
      <div className="flex gap-20">
        <Traditional />
        <SocialMedia />
      </div>
    </div>
  );
}

const Traditional = () => {
  return (
    <div className="w-[450px]">
      <div className="flex gap-5">
        <img src={YummlyLogo} alt="" className="h-14 w-14 rounded-full" />
        <img src={TastyLogo} alt="" className="h-14 w-14 rounded-full" />
        <img src={NYTCookingLogo} alt="" className="h-14 w-14 rounded-full" />
      </div>
      <h2 className="text-xl font-bold my-5">Advantages</h2>
      <ul className="marker:text-[#FF9696] list-outside list-disc leading-7 tracking-wide">
        <li className="mb-3">
          Biggest recipe apps currently exist in the world.
        </li>
        <li className="mb-3">
          Over millions of recipes created by professional chefs, and have been
          crafted in very informative ways.
        </li>
        <li className="mb-3">
          Actively updated contents to make sure the recipes are up to date and
          fresh.
        </li>
        <li className="mb-3">
          These apps generally include a shopping cart function for user to keep
          track of their recipe ingredients, also a way to generate profits for
          the app.
        </li>
        <li className="mb-3">Well made trending system.</li>
      </ul>
      <h2 className="text-xl font-bold my-5">Disadvantages</h2>
      <ul className="marker:text-[#FF9696] list-outside list-disc leading-7 tracking-wide">
        <li className="mb-3">
          <li>
            Traditional recipes apps are not user content driven, most of the
            contents are created by the professional chefs, some of the recipes
            are not made for regular cooks because of the difficulty of the
            recipe.
          </li>
          <li>
            Although the recommendation system and trending systems do exist in
            the apps, the apps are still not data driven, none of the recipes
            are recommended based on the study of the user behavior and their
            preferences.
          </li>
          <li>
            The searching function on these apps lack of granularity, and it's
            merely keywords-based, which makes the searching experience
            unpleasant.
          </li>
          <li>
            There is not a way for people to efficiently provide feedbacks to
            the recipes or the content.
          </li>
          <li>
            The shopping cart feature doesn't keep track the existing
            ingredients users have.
          </li>
          <li>
            The layout of these apps are rather complex and chaotic due to poor
            design and filled with unnecessary contents.
          </li>
        </li>
      </ul>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="w-[450px]">
      <div className="flex gap-5">
        <img src={InstaLogo} alt="" className="h-14 w-14 rounded-full" />
        <img src={TikTokLogo} alt="" className="h-14 w-14 rounded-full" />
      </div>
      <h2 className="text-xl font-bold my-5">Advantages</h2>
      <ul className="marker:text-[#FF9696] list-outside list-disc leading-7 tracking-wide">
        <li>Huge user base makes the content more relatively interesting.</li>
        <li>
          Strongly data-driven, all the recommendations are user preference
          based.
        </li>
        <li>
          Most of the contents that are food related are presented in the form
          of videos, which is easier for people to learn and spend more time to
          stay on the page.
        </li>
        <li>
          Strong social media vibe gives a great environment for people to
          communicate and provide feedbacks.
        </li>
      </ul>
      <h2 className="text-xl font-bold my-5">Disadvantages</h2>
      <ul className="marker:text-[#FF9696] list-outside list-disc leading-7 tracking-wide">
        <li>
          These apps are more of social media apps, not entirely food or recipe
          related.
        </li>
        <li>
          The nature of these apps limits the possibility of searching and
          categorized.
        </li>
        <li>No way for users to track their recipes and collections.</li>
        <li>No other useful features such as shopping cart or meal plans.</li>
      </ul>
    </div>
  );
};

export default CompetitorAnalysis;
