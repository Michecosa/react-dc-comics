import "./ComicCards.css";
import comics from "../data/comics.js";

export default function ComicCards() {
  return (
    <div id="comic-cards">
      {comics.map((comic) => (
        <div key={comic.id} className="comic-card">
          <img src={comic.thumb} alt={comic.series} />
          <p>{comic.series}</p>
        </div>
      ))}
    </div>
  );
}
