import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CategoriesPage.css";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";

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
        <div className="areas-filter-buttons">
          {mainCategoryData?.categories ? (
            mainCategoryData?.categories.map((item, index) => (
              <Link to={`/categorie/${item.strCategory}`} key={index}>
                <button className="button-tags">{item.strCategory}</button>
              </Link>
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
        <div className="fcs-grid">
          {category ? (
            category.map((item, index) => (
              <Link key={index} to={`/details/${item.idMeal}`}>
                <section className="fcs-container">
                  <div className="areas">
                    <div className="fcs-image">
                      <img src={item.strMealThumb} alt="category IMG" />
                    </div>
                    <div className="fcs-name">
                      <p>{item.strMeal}</p>
                    </div>
                  </div>
                </section>
              </Link>
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoriesPage;
