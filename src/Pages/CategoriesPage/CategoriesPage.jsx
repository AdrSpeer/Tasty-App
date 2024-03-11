import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CategoriesPage.css";
import Searchbar from "../../Components/Searchbar/Searchbar";

const CategoriesPage = () => {
  const [category, setCategory] = useState([]);
  const [mainCategoryData, setMainCategoryData] = useState([]);
  const { categories } = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`)
      .then((res) => res.json())
      .then((categoryData) => setCategory(categoryData.meals))
      .catch((error) => console.error("Fehler :-(", error));
  }, [categories]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMainCategoryData(data))
      .catch((error) => console.error("Fehler :-(", error));
  }, []);

  console.log(category);

  return (
    <>
      <Searchbar />
      <section className="categories-page">
        <div className="cat-btn">
          {mainCategoryData?.categories ? (
            mainCategoryData?.categories.map((item, index) => (
              <div key={index}>
                <Link to={`/categorie/${item.strCategory}`}>
                  <button>{item.strCategory}</button>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
        {category ? (
          category.map((item, index) => (
            <Link key={index} to={`/details/${item.idMeal}`}>
              <div className="cat-filter">
                <img src={item.strMealThumb} alt="category IMG" />
                <p>{item.strMeal}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </section>
    </>
  );
};

export default CategoriesPage;
