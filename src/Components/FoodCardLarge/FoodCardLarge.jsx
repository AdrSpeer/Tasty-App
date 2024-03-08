import "./FoodCardLarge.css";
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FoodCardLarge = () => {
    return (
        <section className="fcl-container">
            <div className="fcl-image">
                <img src="https://web2-unterricht.ch/wp-content/uploads/2017/04/titelbild-1.jpg" alt="FOOD IMAGE" />
            </div>
            <div className="fcl-infos">
                <h2>TESTNAME VOM ESSEN</h2>
                <p><CircleIcon style={{ color: "#70b9be" }}/> Beef</p>
            </div>
            <div className="fcl-btn">
                <ArrowForwardIcon style={{ color: "white" }}/>
            </div>
        </section>
    );
}
 
export default FoodCardLarge;