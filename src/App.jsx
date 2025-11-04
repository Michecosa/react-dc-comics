import "./App.css";
import Navbar from "./Navbar";

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
          <div className="container"></div>
        </div>
      </main>

      <footer>
        <div className="container"></div>
      </footer>
    </>
  );
}

export default App;
