import "./navigation.style.scss";
import profile from "../../../assets/profile.svg";

const Navigation = () => (
  <div className="dashboard-navigation">
    <div className="image">
      <img src={profile} alt="" />
    </div>
    <nav>
      <ul>
        <li>
          <ion-icon name="apps-outline"></ion-icon> <p>Dashboard</p>
        </li>
        <li>
          <ion-icon name="notifications-outline"></ion-icon>
          <p>Notifications</p>
        </li>
        <li>
          <ion-icon name="person-outline"></ion-icon>
          <p>Profile</p>
        </li>
        <li>
          <ion-icon name="reader-outline"></ion-icon>
          <p>Your Spaces</p>
        </li>
      </ul>
    </nav>
  </div>
);
export default Navigation;
