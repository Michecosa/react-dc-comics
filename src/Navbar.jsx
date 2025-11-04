import Logo from "./Logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <Logo />
      </div>

      <div className="links-container">
        <ul>
          <li>
            <a href="#">Characters</a>
          </li>
          <li>
            <a href="#">Comics</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Tv</a>
          </li>
          <li>
            <a href="#">Games</a>
          </li>
          <li>
            <a href="#">Collectibles</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
