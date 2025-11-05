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

function App() {
  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>

      <main>
        <div className="container">
          <div className="content">
            <h2>--&gt; Content goes here &lt;--</h2>
          </div>
        </div>
        <div id="shop-info" className="content">
          <div className="container">
            <div id="cards-container">
              <Card imageUrl={digitalComics} text="Digital comics" />
              <Card imageUrl={merchandise} text="DC merchandise" />
              <Card imageUrl={subscriptions} text="Subscription" />
              <Card imageUrl={shopLocator} text="Comic Shop locator" />
              <Card imageUrl={powerVisa} text="DC power visa" />
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
