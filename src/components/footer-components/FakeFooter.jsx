import "./FakeFooter.css";
import DC_Logo from "../../assets/img/dc-logo-bg.png";

const footerColumns = [
  {
    className: "first-column",
    sections: [
      {
        title: "DC Comics",
        section: [
          "Character",
          "Comics",
          "Movies",
          "TV",
          "Games",
          "Videos",
          "News",
        ],
      },
      {
        title: "Shop",
        section: ["Shop DC", "Shop DC Collectibles"],
      },
    ],
  },
  {
    sections: [
      {
        title: "DC",
        section: [
          "Terms Of Use",
          "Privacy policy (New)",
          "Ad Choices",
          "Advertising",
          "Jobs",
          "Subscriptions",
          "Talent Workshops",
          "CPSC Certificates",
          "Ratings",
          "Shop Help",
          "Contact US",
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Sites",
        section: [
          "DC",
          "MAD Magazine",
          "DC Kids",
          "DC Universe",
          "DC Power Visa",
        ],
      },
    ],
  },
];

export default function FakeFooter() {
  return (
    <div id="fake-footer-container">
      <div id="fake-footer-list">
        {footerColumns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={column.className ? column.className : ""}
          >
            {column.sections.map((section, secIndex) => (
              <div className="top-footer-list" key={secIndex}>
                <h2>{section.title}</h2>
                <ul>
                  {section.section.map((link, index) => (
                    <li key={index}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div id="footer-img-container">
        <img src={DC_Logo} alt="DC logo background" />
      </div>
    </div>
  );
}
