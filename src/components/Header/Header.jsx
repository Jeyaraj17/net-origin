import "../Header/Header.css";
import "../App.css";

import logo from "../../img/netorigin-logo.png";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [selectedTopic, setSelectedTopic] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleItemClick = () => {
    setIsNavOpen(false);
  };

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  // For bringing the header on scroll down

  useEffect(() => {
    const HeroEl = document.querySelector(".section-hero");
    const obs = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];
        if (ent.isIntersecting === false) {
          document.body.classList.add("sticky");
        }
        if (ent.isIntersecting === true) {
          document.body.classList.remove("sticky");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
      }
    );
    obs.observe(HeroEl);
  }, []);

  return (
    <header className={`header ${isNavOpen ? "nav-open" : ""}`}>
      <a className="logo-h1-container" href="#top">
        <h1 className="heading-primary">
          <span>N</span>et <span>O</span>rigin
        </h1>
        <img className="logo" src={logo} alt="it is the logo of Net Origin" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li onClick={() => handleClick("home")}>
            <a
              onClick={handleItemClick}
              className={
                selectedTopic === "home"
                  ? "main-nav-link active-btn"
                  : "main-nav-link"
              }
              href="#top"
            >
              Home
            </a>
          </li>
          <li onClick={() => handleClick("service")}>
            <a
              onClick={handleItemClick}
              className={
                selectedTopic === "service"
                  ? "main-nav-link active-btn"
                  : "main-nav-link"
              }
              href="#service"
            >
              Service
            </a>
          </li>
          <li onClick={() => handleClick("contact")}>
            <a
              onClick={handleItemClick}
              className={
                selectedTopic === "contact"
                  ? "main-nav-link nav-cta active-btn-cta"
                  : "main-nav-link nav-cta "
              }
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon
          onClick={handleNavClick}
          class="icon-mobile-nav"
          name="menu-outline"
        ></ion-icon>
        <ion-icon
          onClick={handleNavClick}
          class="icon-mobile-nav"
          name="close-outline"
        ></ion-icon>
      </button>
    </header>
  );
}
