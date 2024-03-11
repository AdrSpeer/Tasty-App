import "./Search.css";
import FoodCardLarge from "./../../Components/FoodCardLarge/FoodCardLarge";
import FoodCardSmall from "../../Components/FoodCardSmall/FoodCardSmall";
import Footer from "../../Components/Footer/Footer";
import Searchbar from "../../Components/Searchbar/Searchbar";

const Search = () => {
  return (
    <>
      <Searchbar />
      <FoodCardLarge />
      <FoodCardSmall />
      <Footer />
    </>
  );
};

export default Search;
