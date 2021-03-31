import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component, path, token }) => (
  <Route
    to={path}
    render={() => (token ? component : <Redirect to="/login" />)}
  />
);
const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(ProtectedRoute);
