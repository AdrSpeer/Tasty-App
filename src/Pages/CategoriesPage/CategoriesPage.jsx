import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CategoriesPage.css";
const CategoriesPage = () => {
  const [category, setCategory] = useState(null);
  const { categories } = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`)
      .then((res) => res.json())
      .then((categoryData) => setCategory(categoryData))
      .catch((error) => console.error("Fehler :-(", error));
  }, []);

  console.log(category);

  return (
    <section className="categories-page">
      {category?.length > 0 ? (
        category?.map((item, index) => (
          <div className="cat-filter" key={index}>
            <Link to={`/categorie/${item.strCategory}`}>
              <img src={item.strCategoryThumb} alt="category IMG" />
              <p>{item.strCategory}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </section>
  );
};

export default CategoriesPage;
