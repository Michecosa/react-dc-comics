import FakeFooter from "./FakeFooter";
import BottomFooter from "./BottomFooter";

export default function Footer() {
  return (
    <footer>
      <div id="top-footer">
        <div className="container">
          <FakeFooter />
        </div>
      </div>
      <div id="bottom-footer">
        <div className="container">
          <BottomFooter />
        </div>
      </div>
    </footer>
  );
}
