// meal of the day =   motd
// <MealOfTheDay MealTitle="Full English Breakfast" TagText="Breakfast" AreasText="British" />
import CircleIcon from "@mui/icons-material/Circle";
import "./MealOfTheDay.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MealOfTheDay = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((randomMeal) => setRandomMeal(randomMeal))
      .catch((error) => console.error("Fehler :-(", error));
  }, []);

  console.log(randomMeal);

  return (
    <>
      <section className="motd-section">
        {randomMeal?.meals.length > 0 ? (
          randomMeal?.meals.map((item, index) => (
            <>
              <h2>Meal of the Day</h2>
              <article key={index} className="motd-card">
                <div>
                  <h2>{item.strMeal}</h2>
                  <div className="motd-flex">
                    <div className="motd-tag-container">
                      <CircleIcon style={{ color: "#C4C4C4" }} />
                      <p>{item.strCategory}</p>
                    </div>
                    <p>{item.strArea}</p>
                  </div>
                </div>
              </article>
            </>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </section>
    </>
  );
};

export default MealOfTheDay;
