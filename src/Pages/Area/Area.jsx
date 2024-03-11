import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchbar from "../../Components/Searchbar/Searchbar";
import "./Area.css";
const Area = () => {
  const [area, setArea] = useState([]);
  const [mainAreaData, setMainAreaData] = useState([]);
  const { areas } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areas}`)
      .then((res) => res.json())
      .then((data) => setArea(data.meals))
      .catch((error) => console.error("Fehler :-(", error));
  }, [areas]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setMainAreaData(data))
      .catch((error) => console.error("Fehler :-(", error));
  }, []);

  return (
    <>
      <Searchbar />
      <div className="cat-btn">
        {mainAreaData?.meals ? (
          mainAreaData?.meals.map((item, index) => (
            <div key={index}>
              <Link to={`/area/${item.strArea}`}>
                <button>{item.strArea}</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </div>
      {area ? (
        area.map((item, index) => (
          <Link key={index} to={`/details/${item.idMeal}`}>
            <div className="area-filter">
              <img src={item.strMealThumb} alt="category IMG" />
              <p>{item.strMeal}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default Area;
