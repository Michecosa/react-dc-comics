import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Logo />
      </div>

      <div>
        <ul>
          <li>Characters</li>
          <li>Comics</li>
          <li>Movies</li>
          <li>Tv</li>
          <li>Games</li>
          <li>Collectibles</li>
          <li>Videos</li>
          <li>Fans</li>
          <li>News</li>
          <li>Shop</li>
        </ul>
      </div>
    </nav>
  );
}
