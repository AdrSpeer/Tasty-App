import "./Search.css";
import FoodCardLarge from "./../../Components/FoodCardLarge/FoodCardLarge";
import FoodCardSmall from "../../Components/FoodCardSmall/FoodCardSmall";
import Footer from "../../Components/Footer/Footer";
import SearchbarTwo from "../../Components/SearchbarTwo/SearchbarTwo";
import SearchbarThree from "../../Components/SearchbarThree/SearchbarThree";
const Search = () => {
  return (
    <>
      <SearchbarTwo />
      <SearchbarThree />
      <FoodCardLarge />
      <FoodCardSmall />
      <Footer />
    </>
  );
};

export default Search;
