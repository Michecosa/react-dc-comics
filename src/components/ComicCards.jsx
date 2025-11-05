import "./ComicCards.css";
import comics from "../data/comics.js";

export default function ComicCards() {
  return (
    <div id="comic-cards">
      {comics.map((comic) => (
        <div key={comic.id} className="comic-card">
          <img
            src={comic.id === 5 ? comics[5].thumb : comic.thumb}
            alt={comic.title}
            className={comic.id === 1 || comic.id === 12 ? "zoom" : ""}
          />
          <p>{comic.series}</p>
        </div>
      ))}
    </div>
  );
}
