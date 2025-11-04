import footerFacebook from "./assets/img/footer-facebook.png";
import footerPeriscope from "./assets/img/footer-periscope.png";
import footerPinterest from "./assets/img/footer-pinterest.png";
import footerTwitter from "./assets/img/footer-twitter.png";
import footerYoutube from "./assets/img/footer-youtube.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div>
        <button>SIGN-UP NOW!</button>
      </div>
      <div id="follow-us">
        <div>Follow Us</div>
        <div class="footer-logo-container">
          <img
            src={footerFacebook}
            class="footer-logo"
            alt="footer social logo"
          />
        </div>
        <div class="footer-logo-container">
          <img
            src={footerTwitter}
            class="footer-logo"
            alt="footer social logo"
          />
        </div>
        <div class="footer-logo-container">
          <img
            src={footerYoutube}
            class="footer-logo"
            alt="footer social logo"
          />
        </div>
        <div class="footer-logo-container">
          <img
            src={footerPinterest}
            class="footer-logo"
            alt="footer social logo"
          />
        </div>
        <div class="footer-logo-container">
          <img
            src={footerPeriscope}
            class="footer-logo"
            alt="footer social logo"
          />
        </div>
      </div>
    </div>
  );
}
