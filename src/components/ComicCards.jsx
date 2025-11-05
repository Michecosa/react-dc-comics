import "./ComicCards.css";
import comics from "../data/comics.js";

export default function ComicCards() {
  return (
    <div className="comic-cards">
      {comics.map((comic, index) => (
        <div key={index} className="comic-card">
          <img src={comic.thumb} alt={comic.title} />
          <h3>{comic.title}</h3>
        </div>
      ))}
    </div>
  );
}
