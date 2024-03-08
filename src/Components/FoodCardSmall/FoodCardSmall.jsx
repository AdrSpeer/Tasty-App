import "./FoodCardSmall.css";
const FoodCardSmall = () => {
  return (
    <section className="fcs-container">
      <div className="fcs-image">
        {/* Image: "strMealThumb" aus Fetch fehlt */}
        <img src="../../../public/fcs-test-image.png" alt="Food-Image" />
      </div>
      <div className="fcs-name">
        {/* Name: "strMeal" aus Fetch fehlt */}
        <p>Piri-piri chicken and slaw</p>
      </div>
    </section>
  );
};

export default FoodCardSmall;
