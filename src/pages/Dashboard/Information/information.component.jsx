import "./information.style.scss";
import Card from "../Card/card.component";
import { connect } from "react-redux";

const Information = ({ user }) => (
  <div className="information">
    <h1>Welcome, {user.name}</h1>
    <div className="card-container">
      <Card name="Your Listed Spaces" number="5" color="blue" />
      <Card name="Applied Spaces" number="3" color="green" />
      <Card name="Some Space Sha" number="14" color="purple" />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Information);
