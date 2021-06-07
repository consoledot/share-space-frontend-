import { useState, useRef } from "react";
import "./login.style.scss";
import { useHistory } from "react-router-dom";
import FormInput from "../../components/FormInput/forminput.component";
import Button from "../../components/Button/button.component";
import { Link } from "react-router-dom";
import Authentication from "../../requests/auth";
import { connect } from "react-redux";
import { addToken, addUser } from "../../redux/action";
const LoginPage = ({ addToken, addUser }) => {
  const history = useHistory();
  const email = useRef();
  const password = useRef();
  const { login } = Authentication();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    state: false,
    message: "",
  });
  const [name, setName] = useState("log in");
  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const Submit = async (event) => {
    event.preventDefault();
    setName("loading");
    const data = await login(user);
    if (data.token) {
      localStorage.setItem("token", data.token);
      addToken(data.token);
      addUser(data.user);
      setUser({
        email: "",
        passlword: "",
      });
      history.push("/spaces");
    } else {
      setName("log in");
      email.current.value = "";
      password.current.value = "";
      setUser({
        email: "",
        password: "",
      });
      setError({
        state: true,
        message: `${data.error ? data.error : "Network Error"}`,
      });
    }
  };

  return (
    <div className="loginpage">
      <div className="form__group">
        <div className="login__text">
          <h3>Log In</h3>
          <p>Log in to continue</p>
        </div>
        <form action="" onSubmit={Submit}>
          <p
            className="error"
            style={{
              visibility: `${!error.state ? "hidden" : "visible"}`,
            }}
          >
            {error.message}
          </p>
          <FormInput
            type="email"
            placeholder="Email"
            inputRef={email}
            name="email"
            onchange={handleInput}
          />
          <FormInput
            type="password"
            placeholder="Password"
            inputRef={password}
            name="password"
            onchange={handleInput}
          />
          <Button name={name} type="submit" />
          <Link to="/forgot-password" className="forget__password">
            Forget Password?
          </Link>
          <p className="register">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addToken: (token) => dispatch(addToken(token)),
  addUser: (user) => dispatch(addUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
