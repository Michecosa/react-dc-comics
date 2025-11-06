import "./ComicCards.css";
import ComicCard from "./ComicCard";

export default function ComicCards({ comics }) {
  return (
    <div id="comic-cards" className="row">
      {comics.map((comic) => (
        <ComicCard
          key={comic.id}
          comic={
            comic.id === 5
              ? { ...comic, thumb: comics[5] && comics[5].thumb }
              : comic
          }
        />
      ))}
    </div>
  );
}
