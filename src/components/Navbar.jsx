import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "./Logo";
import "./Navbar.css";
const navLinks = [
  { label: "Characters", href: "#" },
  { label: "Comics", href: "#" },
  { label: "Movies", href: "#" },
  { label: "Tv", href: "#" },
  { label: "Games", href: "#" },
  { label: "Collectibles", href: "#" },
  { label: "Videos", href: "#" },
  { label: "Fans", href: "#" },
  { label: "News", href: "#" },
  { label: "Shop", href: "#" },
];

export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <Logo />
      </div>

      <button className="menu-toggle btn btn-burger">
        <i className="bi bi-list"></i>
      </button>

      <div className="links-container">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
