import React from "react";
import "./Hero.css";
import "../App.css";

import heroImg from "../../img/hero-img.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text-box">
        <h1 className="hero-heading">Net origin</h1>
        <div className="success-quote">
          <p>One Step Forward</p>
          <p>To Your</p>
          <p>Digital Success</p>
        </div>
        <div className="hero-line-container">
          <div className="hero-line"></div>
        </div>
        <p className="hero-quote">Boost your business with us!</p>
        <a className="connect-us-btn" href="#contact">
          Connect With us &gt;{" "}
        </a>
      </div>
      <div className="hero-img-box">
        <img className="hero-img" src={heroImg} alt="" />
      </div>
    </div>
  );
}
