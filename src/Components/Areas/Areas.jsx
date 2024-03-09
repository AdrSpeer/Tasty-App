import SearchbarThree from "../SearchbarThree/SearchbarThree";
import SeeAll from "../SeeAll/SeeAll";
import "./Areas.css";

const Areas = () => {
  return (
    <>
      <section className="areas-section">
        <div className="areas-title-flex">
          <h2>Areas</h2>
          <SearchbarThree />
          <SeeAll />
        </div>
        <div className="areas-filter-buttons">
          <button>American</button>
          <button>British</button>
          <button>Dutch</button>
        </div>
      </section>
    </>
  );
};

export default Areas;
