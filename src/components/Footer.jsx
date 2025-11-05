import footerFacebook from "../assets/img/footer-facebook.png";
import footerPeriscope from "../assets/img/footer-periscope.png";
import footerPinterest from "../assets/img/footer-pinterest.png";
import footerTwitter from "../assets/img/footer-twitter.png";
import footerYoutube from "../assets/img/footer-youtube.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div>
          <a href="#" className="btn btn-signup">
            SIGN-UP NOW!
          </a>
        </div>
        <div id="follow-us">
          <h2>Follow Us</h2>
          <div className="footer-logo-container">
            <a href="#">
              <img
                src={footerFacebook}
                className="footer-logo"
                alt="footer social logo"
              />
            </a>
          </div>
          <div className="footer-logo-container">
            <a href="#">
              <img
                src={footerTwitter}
                className="footer-logo"
                alt="footer social logo"
              />
            </a>
          </div>
          <div className="footer-logo-container">
            <a href="#">
              <img
                src={footerYoutube}
                className="footer-logo"
                alt="footer social logo"
              />
            </a>
          </div>
          <div className="footer-logo-container">
            <a href="#">
              <img
                src={footerPinterest}
                className="footer-logo"
                alt="footer social logo"
              />
            </a>
          </div>
          <div className="footer-logo-container">
            <a href="#">
              <img
                src={footerPeriscope}
                className="footer-logo"
                alt="footer social logo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
