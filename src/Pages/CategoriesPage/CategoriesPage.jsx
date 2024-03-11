import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CategoriesPage.css";

const CategoriesPage = () => {
  const [category, setCategory] = useState([]);
  const { categories } = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`)
      .then((res) => res.json())
      .then((categoryData) => setCategory(categoryData.meals))
      .catch((error) => console.error("Fehler :-(", error));
  }, []);

  console.log(category);

  return (
    <section className="categories-page">
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
  );
};

export default CategoriesPage;
