import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "./Logo";
import "./Navbar.css";
const navLinks = [
  { label: "Characters", href: "#", current: false },
  { label: "Comics", href: "#", current: true },
  { label: "Movies", href: "#", current: false },
  { label: "Tv", href: "#", current: false },
  { label: "Games", href: "#", current: false },
  { label: "Collectibles", href: "#", current: false },
  { label: "Videos", href: "#", current: false },
  { label: "Fans", href: "#", current: false },
  { label: "News", href: "#", current: false },
  { label: "Shop", href: "#", current: false },
];

export default function Navbar() {
  const handleToggleMenu = () => {
    document.querySelector(".offcanvas-menu").classList.toggle("open");
    document.querySelector(".overlay").classList.toggle("active");
  };

  return (
    <>
      <nav>
        <div className="logo-container">
          <Logo />
        </div>

        <button
          className="menu-toggle btn btn-burger"
          onClick={handleToggleMenu}
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="links-container">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className={link.current ? "current" : ""}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="offcanvas-menu">
        <button className="close-btn btn" onClick={handleToggleMenu}>
          <i className="bi bi-x-lg"></i>
        </button>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="overlay" onClick={handleToggleMenu}></div>
    </>
  );
}
