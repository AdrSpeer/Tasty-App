// category = cat
// <Categories ImgURL="https://picsum.photos/500/300/" Category="Beef" />
import SeeAll from "../SeeAll/SeeAll";
import "./Categories.css";
const Categories = (props) => {
  return (
    <>
      <section className="cat-section">
        <div className="cat-title-flex">
          <h2>Categories</h2>
          <SeeAll />
        </div>
        <div className="cat-card-container">
          <div className="cat-card">
            <img src={props.ImgURL} alt="category" />
            <p>{props.Category}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
