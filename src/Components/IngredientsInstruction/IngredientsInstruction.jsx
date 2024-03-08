import "./IngredientsInstruction.css";
const IngredientsInstruction = () => {
  return (
    <section className="DetailsFood">
      <div className="DetailsFoodContainer">
        {/* Name: "strMeal" aus Fetch fehlt */}
        <h2>Healthy Taco Salad</h2>
        {/* Name: "strCategory" aus Fetch fehlt */}
        <h3>Beakfast</h3>
        {/* Name: "strArea" aus Fetch fehlt */}
        <h4>British</h4>
        <div className="ButtonCluster">
          <button>Ingredients</button>
          <button>Instructions</button>
        </div>
        <h5>Ingredients</h5>
        <p>3/4 cup Tortilla Chips</p>
        <p>1/2 cup Avocado</p>
        <p>2 Red Cabbage</p>
        <p>2 Teaspoons Peanuts</p>
        <p>1 Red Onions</p>
      </div>
    </section>
  );
};

export default IngredientsInstruction;
