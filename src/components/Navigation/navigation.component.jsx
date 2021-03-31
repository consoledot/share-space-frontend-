import "./navigation.style.scss";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/share space.svg";
import Button from "../Button/button.component";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeToken } from "../../redux/action";

const Navigation = ({ token, removeToken }) => {
  const navigation = useRef();
  const menu = useRef();
  const history = useHistory();
  const navigationBody = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const removeMenu = () => {
    setShowMenu(false);
    navigation.current.classList.remove("show");
    menu.current.classList.remove("show");
  };
  const logOut = () => {
    removeToken();
    localStorage.removeItem("token");
    removeMenu();
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navigationBody.current.classList.add("scroll");
      } else {
        navigationBody.current.classList.remove("scroll");
      }
    });
  }, []);
  return (
    <div className="navigation" ref={navigationBody}>
      <div
        className="logo"
        onClick={() => {
          history.push("/");
          removeMenu();
        }}
      >
        <img src={logo} alt="" />
      </div>
      <div
        className="menu"
        ref={menu}
        onClick={() => {
          navigation.current.classList.toggle("show");
          menu.current.classList.toggle("show");
          setShowMenu(!showMenu);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav ref={navigation}>
        <ul>
          <NavLink to="/spaces" onClick={removeMenu}>
            <li>Browse Spaces</li>
          </NavLink>
          <NavLink to="/list-your-space" onClick={removeMenu}>
            <li>List your Space</li>
          </NavLink>
          <NavLink to="/about-us" onClick={removeMenu}>
            <li>About Us</li>
          </NavLink>
          {token ? (
            <>
              <NavLink to="/" onClick={logOut}>
                <li className="logout">Logout</li>
              </NavLink>
              <NavLink to="/dashboard" onClick={removeMenu}>
                <Button name="Dashboard" invert={showMenu} />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={removeMenu}>
                <li className="login">Login</li>
              </NavLink>
              <NavLink to="/sign-up" onClick={removeMenu}>
                <Button name="Get Started" invert={showMenu} />
              </NavLink>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProp = (state) => ({
  token: state.token,
});
const mapDispatchToProps = (dispatch) => ({
  removeToken: () => dispatch(removeToken()),
});
export default connect(mapStateToProp, mapDispatchToProps)(Navigation);
