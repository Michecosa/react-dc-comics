import ComicCards from "./ComicCards";
import Card from "./Card";

export default function Main({ comics, cardsData }) {
  return (
    <main>
      <div id="top-main">
        <div className="container">
          <div className="content">
            {/* <h2>--&gt; Content goes here &lt;--</h2> */}
          </div>
        </div>
      </div>
      <div id="comic-cards-container">
        <div className="container">
          <h2 className="btn-blue">CURRENT SERIES</h2>
          <div className="row">
            <ComicCards comics={comics} />
          </div>
          <div className="text-center">
            <button id="load-more" className="btn-blue">
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
      <div id="shop-info" className="content">
        <div className="container">
          <div id="cards-container">
            {cardsData.map((card, index) => (
              <Card key={index} imageUrl={card.imageUrl} text={card.text} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
