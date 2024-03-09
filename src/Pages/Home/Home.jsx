import "./Home.css";
import MealOfTheDay from "../../Components/MealOfTheDay/MealOfTheDay";
import Areas from "../../Components/Areas/Areas";
import Categories from "../../Components/Categories/Categories";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Searchbar />

      <MealOfTheDay
        MealTitle="Full English Breakfast"
        TagText="Breakfast"
        AreasText="British"
      />
      <Areas />
      <Categories ImgURL="https://picsum.photos/500/300/" Category="Beef" />
      <Footer />
    </>
  );
};

export default Home;
