import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

import digitalComics from "./assets/img/buy-comics-digital-comics.png";
import merchandise from "./assets/img/buy-comics-merchandise.png";
import subscriptions from "./assets/img/buy-comics-subscriptions.png";
import shopLocator from "./assets/img/buy-comics-shop-locator.png";
import powerVisa from "./assets/img/buy-dc-power-visa.svg";
import FakeFooter from "./components/FakeFooter";
import ComicCards from "./components/ComicCards";

export const cardsData = [
  {
    imageUrl: digitalComics,
    text: "Digital comics",
  },
  {
    imageUrl: merchandise,
    text: "DC merchandise",
  },
  {
    imageUrl: subscriptions,
    text: "Subscription",
  },
  {
    imageUrl: shopLocator,
    text: "Comic Shop locator",
  },
  {
    imageUrl: powerVisa,
    text: "DC power visa",
  },
];

function App() {
  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>

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
              <ComicCards />
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

      <footer>
        <div id="top-footer">
          <div className="container">
            <FakeFooter />
          </div>
        </div>
        <div id="bottom-footer">
          <div className="container">
            <Footer />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
