import "./BlueCard.css";

function Card({ imageUrl, text }) {
  return (
    <div className="card-container">
      <div>
        <img src={imageUrl} alt="card" />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
