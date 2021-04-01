import "./App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoutes";
import {
  Login,
  Home,
  Register,
  ForgetPage,
  Spaces,
  About,
  Listing,
  Dashboard,
  Space,
} from "./pages";
import Navigation from "./components/Navigation/navigation.component";
import { connect } from "react-redux";
import { addToken } from "./redux/action";

function App({ addToken }) {
  useEffect(() => {
    console.log("jha");
    addToken(localStorage.getItem("token"));
  });
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Register} />
        <Route path="/forgot-password" component={ForgetPage} />
        <Route exact path="/spaces" component={Spaces} />
        <Route path="/about-us" component={About} />
        <ProtectedRoute path="/list-your-space" component={<Listing />} />
        <ProtectedRoute path="/dashboard" component={<Dashboard />} />
        {/* <ProtectedRoute path="/spaces/:id" component={<Space />} /> */}
        <Route path="/spaces/:id" component={Space} />
      </Switch>
    </>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addToken: (token) => dispatch(addToken(token)),
});
export default connect(null, mapDispatchToProps)(App);
