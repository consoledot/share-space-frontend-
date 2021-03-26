import "./card.style.scss";

const Card = ({ name, number, color }) => (
  <div
    className="info-card"
    style={{
      backgroundColor: `${color ? color : "yellow"}`,
    }}
  >
    <p>{name}</p>
    <p>{number}</p>
  </div>
);

export default Card;
