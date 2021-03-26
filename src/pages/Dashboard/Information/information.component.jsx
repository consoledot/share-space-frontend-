import "./information.style.scss";
import Card from "../Card/card.component";

const Information = () => (
  <div className="information">
    <h1>Welcome, Abimbola</h1>
    <div className="card-container">
      <Card name="Your Listed Spaces" number="5" color="blue" />
      <Card name="Applied Spaces" number="3" color="green" />
      <Card name="Some Space Sha" number="14" color="purple" />
    </div>
  </div>
);

export default Information;
