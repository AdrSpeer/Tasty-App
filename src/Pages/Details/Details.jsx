import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import IngredientsInstruction from "../../Components/IngredientsInstruction/IngredientsInstruction";
import "./Details.css";
import { useParams } from "react-router-dom";
const Details = () => {
  const [detailData, setDetailData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setDetailData(data.meals))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, []);

  console.log(detailData);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const finder = detailData?.find((item) => Number(item.id) === Number(id));
    setFilterData(finder);
  }, [detailData]);

  return (
    <>
      <IngredientsInstruction />
      <Footer />
    </>
  );
};

export default Details;
