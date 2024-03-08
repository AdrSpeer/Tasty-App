import "./FoodCardSmall.css";
const FoodCardSmall = () => {
  return (
    <section className="fcs-container">
      <div className="fcs-image">
        <img src="../../../public/fcs-test-image.png" alt="Food-Image" />
      </div>
      <div className="fcs-name">
        <p>Piri-piri chicken and slaw</p>
      </div>
    </section>
  );
};

export default FoodCardSmall;
