import "./FakeFooter.css";
import DC_Logo from "./assets/img/dc-logo-bg.png";

export default function FakeFooter() {
  return (
    <div id="fake-footer-container">
      <div id="fake-footer-list">
        <div className="first-column">
          <div className="top-footer-list">
            <h2>DC Comics</h2>
            <ul>
              <li>
                <a href="#">Character</a>
              </li>
              <li>
                <a href="#">Comics</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="top-footer-list">
            <h2>Shop</h2>
            <ul>
              <li>
                <a href="#">Shop DC</a>
              </li>
              <li>
                <a href="#">Shop DC Collectibles</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="top-footer-list">
          <h2>DC</h2>
          <ul>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Privacy policy (New)</a>
            </li>
            <li>
              <a href="#">Ad Choices</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Subscriptions</a>
            </li>
            <li>
              <a href="#">Talent Workshops</a>
            </li>
            <li>
              <a href="#">CPSC Certificates</a>
            </li>
            <li>
              <a href="#">Ratings</a>
            </li>
            <li>
              <a href="#">Shop Help</a>
            </li>
            <li>
              <a href="#">Contact US</a>
            </li>
          </ul>
        </div>
        <div className="top-footer-list">
          <h2>Sites</h2>
          <ul>
            <li>
              <a href="#">DC</a>
            </li>
            <li>
              <a href="#">MAD Magazine</a>
            </li>
            <li>
              <a href="#">DC Kids</a>
            </li>
            <li>
              <a href="#">DC Universe</a>
            </li>
            <li>
              <a href="#">DC Power Visa</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-img-container">
        <img src={DC_Logo} alt="" />
      </div>
    </div>
  );
}
