import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import IngredientsInstruction from "../../Components/IngredientsInstruction/IngredientsInstruction";
import "./Details.css";
const Details = () => {
  const [detailData, setDetailData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setDetailData(data.meals))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, [detailData]);

  console.log(detailData);

  const { id } = useParams();

  useEffect(() => {
    const finder = detailData.find((item) => item.id === id);
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
