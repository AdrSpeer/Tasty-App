import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import "./Details.css";
import { useParams } from "react-router-dom";
const Details = () => {
  const [detailData, setDetailData] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

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
          <section className="DetailsFood" key = {index}>
            <div className="DetailsFoodContainer">
              <h2>{item.strMeal}</h2>
              <h3>{item.strCategory}</h3>
              <h4>{item.strArea}</h4>
              {/* Hier habe ich deine Buttons gebaut, mit einem State. Damit habe ich den Switch gemacht und das Styling habe ich auch schon gemacht, kannst du noch anpassen wenn du willst.*/}
              <div className="ButtonCluster">
              <button className={`detail-btn ${showInstructions === false ? "active" : "" }`} onClick={() => setShowInstructions(false)}>Ingredients</button>
              <button className={`detail-btn ${showInstructions === true ? "active" : "" }`} onClick={() => setShowInstructions(true)}>Instrucion</button>
              </div>
              {showInstructions === false ? (
              <div className="ingredients">
                <h5>Ingredients</h5>
                {/* Kurzes Update vom Code, bisschen gecheatet aber dafür wesentlich weniger Zeilen, muss man nicht verstehen, kann man aber :D*/}
                {/* Leeres Array mit 20 Elementen wird generiert, Wert ist irrelevant, nur index(key) ist wichtig, simuliert mehr oder weniger eine for Schleife, damit wir uns die tausend Zeilen unten sparen können. :D*/}
                {[...Array(20)].map((_,index) => (
                  <p key = {index}>
                    {item["strMeasure" + index]} {item["strIngredient" + index]}
                  </p>
                ))}
              </div> ) : (
              <div className="instructions">
                <h5>Instructions</h5>
                <p>{item.strInstructions}</p>
              </div> )}
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
