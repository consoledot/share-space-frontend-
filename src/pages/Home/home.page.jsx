import "./home.style.scss";
import { useEffect } from "react";
import headerlogo from "../../assets/space-logo.svg";
import Button from "../../components/Button/button.component";
import Footer from "../../components/Footer/footer.component";
import office from "../../assets/office.jpg";
import warehouse from "../../assets/warehouse.jpg";
import apartment from "../../assets/apartment.jpg";
import { connect } from "react-redux";
import { addToken } from "../../redux/action";

const Home = ({ addToken }) => {
  useEffect(() => {
    addToken(localStorage.getItem("token"));
  });
  return (
    <>
      <header>
        <div className="header-text">
          <h1>Your Last Stop for Getting Your Desired Space</h1>
          <p>
            Search for Apartments, Shop, Event Centres and other spaces that are
            affordable and{" "}
          </p>
          <Button name="Browse Spaces" />
        </div>
        <div className="header__image">
          <img src={headerlogo} alt="" />
        </div>
      </header>
      <section className="explore">
        <div className="text">
          <h3>Explore your Options</h3>
          <p>Check out our extensive list of spaces for your use</p>
        </div>
        <div className="inner-explore">
          <div className="options">
            <div className="bg"></div>
            <img src={office} />
            <div className="text">
              <p>Work Space</p>
            </div>
          </div>
          <div className="options">
            <div className="bg"></div>
            <img src={warehouse} />
            <div className="text">
              <p>Warehouses</p>
            </div>
          </div>
          <div className="options">
            <div className="bg"></div>
            <img src={apartment} />
            <div className="text">
              <p>Apartments</p>
            </div>
          </div>
        </div>
      </section>
      <section className="owner">
        <h2>Are your a property owner?</h2>
        <p>
          Join our network of owners like you who uses our platform to get
          costumers tenants{" "}
        </p>
        <Button name="List Your Space" />
      </section>
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToken: (token) => dispatch(addToken(token)),
});
export default connect(null, mapDispatchToProps)(Home);
