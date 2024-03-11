import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FoodCardSmall.css";
const FoodCardSmall = () => {
  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Bei fetch nach "c=" noch den Button Value einfügen
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Fehler Bei FCS-Categories", err));
  }, []);

  useEffect(() => {
    // Bei fetch nach "a=" noch den Button Value einfügen
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=American")
      .then((res) => res.json())
      .then((areaData) => setAreas(areaData.meals))
      .catch((err) => console.error("Fehler Bei FCS-Areas", err));
  }, []);

  return (
    <div className="fcs-grid">
      {areas ? (
        areas.map((item, index) => (
          <Link to={`/details/${item.idMeal}`} key={index}>
            <section className="fcs-container">
              <div className="areas">
                <div className="fcs-image">
                  <img src={item.strMealThumb} alt="Food-Image" />
                </div>
                <div className="fcs-name">
                  <p>{item.strMeal}</p>
                </div>
              </div>
            </section>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FoodCardSmall;
