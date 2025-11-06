import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main";
import Footer from "./components/Footer.jsx";
import comics from "./data/comics.js";

import FakeFooter from "./components/FakeFooter";
import digitalComics from "./assets/img/buy-comics-digital-comics.png";
import merchandise from "./assets/img/buy-comics-merchandise.png";
import subscriptions from "./assets/img/buy-comics-subscriptions.png";
import shopLocator from "./assets/img/buy-comics-shop-locator.png";
import powerVisa from "./assets/img/buy-dc-power-visa.svg";

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
      <Header />
      <Main comics={comics} cardsData={cardsData} />
      <Footer />
    </>
  );
}

export default App;
