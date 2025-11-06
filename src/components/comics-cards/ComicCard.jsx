import "./ComicCards.css";

export default function ComicCard({ comic }) {
  return (
    <div className="comic-card col-xl-2 col-lg-3 col-md-6 col-sm-12">
      <div className="image-wrapper">
        <img
          src={comic.thumb}
          alt={comic.title}
          className={comic.id === 1 || comic.id === 12 ? "zoom" : ""}
        />
      </div>
      <p>{comic.series}</p>
    </div>
  );
}
