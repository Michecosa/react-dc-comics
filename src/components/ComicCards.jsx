import "./ComicCards.css";
import comics from "../data/comics.js";

export default function ComicCards() {
  return (
    <div className="comic-cards">
      {comics.map((comic) => (
        <div key={comic.id} className="comic-card">
          <img src={comic.thumb} alt={comic.title} />
          <h3>{comic.title}</h3>
          <p>{comic.series}</p>
          <span>{comic.price}</span>
        </div>
      ))}
    </div>
  );
}
