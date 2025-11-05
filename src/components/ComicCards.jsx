import "./ComicCards.css";
import comics from "../data/comics.js";

export default function ComicCards() {
  return (
    <div id="comic-cards" className="row">
      {comics.map((comic) => (
        <div
          key={comic.id}
          className="comic-card col-xl-2 col-lg-3 col-md-6 col-sm-12"
        >
          <div className="image-wrapper">
            <img
              src={comic.id === 5 ? comics[5].thumb : comic.thumb}
              alt={comic.title}
              className={comic.id === 1 || comic.id === 12 ? "zoom" : ""}
            />
          </div>
          <p>{comic.series}</p>
        </div>
      ))}
    </div>
  );
}
