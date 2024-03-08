import "./Home.css";
import MealOfTheDay from "../../Components/MealOfTheDay/MealOfTheDay";
import Areas from "../../Components/Areas/Areas";
import Categories from "../../Components/Categories/Categories";
import Searchbar from "../../Components/Searchbar/Searchbar";

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
      <Categories />
    </>
  );
};

export default Home;
