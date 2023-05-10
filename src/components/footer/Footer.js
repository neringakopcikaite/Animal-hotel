import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import Fb from "../../assets/Shape (6).svg";
import LinkedIn from "../../assets/Shape (5).svg";

const Footer = () => {
  return (
    <footer className="container-fluid d-flex flex-column flex-wrap">
      <button onClick={topFunction} id="myBtnTop" title="Go to top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
        </svg>
      </button>

      <div className="container">
        <div className="footer row d-flex align-items-start justify-content-between my-4">
          <div id="title" className="col-md-3">
            <span>Tiukelis</span>
            <div className="social-media-icons">
              <Link to="https://www.linkedin.com/" target="_blank">
                <img src={LinkedIn} alt="" />
              </Link>
              <Link to="https://www.facebook.com/" target="_blank">
                <img src={Fb} alt="" />
              </Link>
            </div>
            <div id="footer-contacts">
              <a
                style={{ "word-break": "break-word" }}
                href="mailto:gyvunuviesbutis@tiukelis.lt"
              >
                cia@tiukelis.lt
              </a>{" "}
              <a href="tel:+37061234567">+37061234567</a>
            </div>
          </div>
          <div
            id="address"
            className="info-details col-md-3 d-flex flex-column align-items-center"
          >
            <span>ADRESAS</span>
            <span>Ozo gatvė 18, Vilnius</span>
          </div>
          <div
            id="work-time"
            className="info-details col-md-3 d-flex flex-column align-items-center"
          >
            <span>DARBO LAIKAS</span>
            <span>I-VII: 9:00 – 19:00</span>
          </div>
          <div
            id="menu"
            className="info-details  col-md-3 d-flex flex-column align-items-center"
          >
            <span>MENIU</span>
            <div className="footer-menu d-flex justify-content-between align-items-center">
              <ul className="d-flex justify-content-between align-items-center mb-0 nav-links">
                <li>
                  <Link onClick={() => setActiveLink("apieId")} to="/">
                    Pradžia
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setActiveLink("viesbutisId")}
                    to="/viesbutis"
                  >
                    Viešbutis
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setActiveLink("spaId")} to="/spa">
                    SPA
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setActiveLink("dresuraId")}
                    to="/dresura"
                  >
                    Dresūra
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setActiveLink("specialistaiId")}
                    to="/specialistai"
                  >
                    Komanda
                  </Link>
                </li>
                <li>
                  <Link
                    nClick={() => setActiveLink("kontaktaiId")}
                    to="/kontaktai"
                  >
                    Kontaktai
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const setActiveLink = (id) => {
  setTimeout(() => {
    let activeLink;
    if (activeLink) {
      activeLink.style.color = "#5e6085";
    } else {
      const linkElement = document.getElementById(id);
      linkElement.style.color = "#ff8c00";
      activeLink = linkElement;
    }
  }, 200);
};

export default Footer;
