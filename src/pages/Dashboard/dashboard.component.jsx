import "./dashboard.style.scss";
import Navigation from "./Navigation/navigation.component";
import Information from "./Information/information.component";

const Dashboard = () => (
  <div className="dashboard">
    <Navigation />
    <Information />
  </div>
);
export default Dashboard;
