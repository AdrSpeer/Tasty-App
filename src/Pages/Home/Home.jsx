import "./Home.css";
import MealOfTheDay from "../../Components/MealOfTheDay/MealOfTheDay";
import Areas from "../../Components/Areas/Areas";
const Home = () => {
  return (
    <>
      <MealOfTheDay MealTitle="Full English Breakfast" TagText="Breakfast" AreasText="British" />
      <Areas />
    </>
  );
};

export default Home;
