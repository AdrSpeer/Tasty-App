import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import "./Details.css";
import { useParams } from "react-router-dom";
const Details = () => {
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setDetailData(data.meals))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, []);

  console.log(detailData);
  const { id } = useParams();

  return (
    <>
      {detailData ? (
        detailData.map((item, index) => (
          <section className="DetailsFood">
            <div className="DetailsFoodContainer">
              <h2>{item.strMeal}</h2>
              <h3>{item.strCategory}</h3>
              <h4>{item.strArea}</h4>
              <div className="ButtonCluster">
                <button>Ingredients</button>
                <button>Instructions</button>
              </div>
              <div className="ingredients">
                <h5>Ingredients</h5>
                <p>
                  {item.strMeasure1} {item.strIngredient1}
                </p>
                <p>
                  {item.strMeasure2} {item.strIngredient2}
                </p>
                <p>
                  {item.strMeasure3} {item.strIngredient3}
                </p>
                <p>
                  {item.strMeasure4} {item.strIngredient4}
                </p>
                <p>
                  {item.strMeasure5} {item.strIngredient5}
                </p>
                <p>
                  {item.strMeasure6} {item.strIngredient6}
                </p>
                <p>
                  {item.strMeasure7} {item.strIngredient7}
                </p>
                <p>
                  {item.strMeasure8} {item.strIngredient8}
                </p>
                <p>
                  {item.strMeasure9} {item.strIngredient9}
                </p>
                <p>
                  {item.strMeasure10} {item.strIngredient10}
                </p>
                <p>
                  {item.strMeasure11} {item.strIngredient11}
                </p>
                <p>
                  {item.strMeasure12} {item.strIngredient12}
                </p>
                <p>
                  {item.strMeasure13} {item.strIngredient13}
                </p>
                <p>
                  {item.strMeasure14} {item.strIngredient14}
                </p>
                <p>
                  {item.strMeasure15} {item.strIngredient15}
                </p>
                <p>
                  {item.strMeasure16} {item.strIngredient16}
                </p>
                <p>
                  {item.strMeasure17} {item.strIngredient17}
                </p>
                <p>
                  {item.strMeasure18} {item.strIngredient18}
                </p>
                <p>
                  {item.strMeasure19} {item.strIngredient19}
                </p>
                <p>
                  {item.strMeasure20} {item.strIngredient20}
                </p>
              </div>
              <div className="instructions">
                <h5>Instructions</h5>
                <p>{item.strInstructions}</p>
              </div>
            </div>
          </section>
        ))
      ) : (
        <p>Loading...</p>
      )}

      <Footer />
    </>
  );
};

export default Details;
