import SearchbarThree from "../SearchbarThree/SearchbarThree";
import SeeAll from "../SeeAll/SeeAll";
import "./Areas.css";

const Areas = () => {
  return (
    <>
      <section className="areas-section">
        <div className="areas-title-flex">
          <h2>Areas</h2>

          <SeeAll />
        </div>
        <div className="areas-filter-buttons">
          <button className="button-tags">American</button>
          <button className="button-tags">British</button>
          <button className="button-tags">Dutch</button>
        </div>
      </section>
    </>
  );
};

export default Areas;
