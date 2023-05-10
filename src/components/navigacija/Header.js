import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import Img from "../../assets/Union.svg";

const Header = () => {
  return (
    <header className="container-fluid ">
      <nav className="container d-flex justify-content-between align-items-center">
        <div id="logo" className="d-flex justify-content-center align-items-center">
          <span>Tiukelis</span>
          <img src={Img} alt="pedute" />
        </div>
        <div className="nav d-flex justify-content-between align-items-center">
          <ul className="d-flex justify-content-between align-items-center mb-0 nav-links">
            <li>
              <Link id="apieId" onClick={() => setActiveLink("apieId")} to="/">
                Pradžia
              </Link>
            </li>
            <li>
              <Link
                id="viesbutisId"
                onClick={() => setActiveLink("viesbutisId")}
                to="/viesbutis"
              >
                Viešbutis
              </Link>
            </li>
            <li>
              <Link id="spaId" onClick={() => setActiveLink("spaId")} to="/spa">
                SPA
              </Link>
            </li>
            <li>
              <Link
                id="dresuraId"
                onClick={() => setActiveLink("dresuraId")}
                to="/dresura"
              >
                Dresūra
              </Link>
            </li>
            <li>
              <Link
                id="specialistaiId"
                onClick={() => setActiveLink("specialistaiId")}
                to="/specialistai"
              >
                Komanda
              </Link>
            </li>
            <li>
              <Link
                id="kontaktaiId"
                onClick={() => setActiveLink("kontaktaiId")}
                to="/kontaktai"
              >
                Kontaktai
              </Link>
            </li>
          </ul>
          <div onClick={navSlide} className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //Toggle nav
  nav.classList.toggle("nav-active");
  //Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
  //Burger animation
  burger.classList.toggle("toggle");
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

export default Header;
