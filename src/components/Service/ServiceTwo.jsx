import React from "react";
import marketImg from "../../img/marketing.png";
import uiuxImg from "../../img/uiux.png";
import backendImg from "../../img/backend.png";
import clientImg from "../../img/client.png";

export default function ServiceTwo() {
  return (
    <div className="container grid forty-sixty-grid">
      <div className="main-text-box">
        <div className="service-offer-container">
          <div>
            <h3 className="heading-tertiary">WEB DEVELOPMENT</h3>
            <blockquote className="service-tag">
              "Your website, your way - we make it happen."
            </blockquote>
          </div>
        </div>
      </div>

      <div className="side-text-box grid-low-space grid--2--cols">
        <div className="side-wrapper">
          <img src={marketImg} className="c2-icon" alt="" />
          <h6 className="side-heading">Frontend Development</h6>
          <p className="side-content">
            Our team comprises professional frontend developer with extensive
            expertise in major frameworks and a flair for crafting meticulous
            designs that ensures unparalleled user experiences.
          </p>
        </div>
        <div className="side-wrapper">
          <img src={uiuxImg} className="c2-icon" alt="" />
          <h6 className="side-heading">UI/UX Designing</h6>
          <p className="side-content">
            We develop comprehensive social media strategies that align with
            business goals and target audience. Our strategies cover all major
            social media platforms including facebook, twitter, Instagram,
            linkedin and youtube.
          </p>
        </div>
        <div className="side-wrapper">
          <img src={backendImg} className="c2-icon" alt="" />
          <h6 className="side-heading">Backend Development</h6>
          <p className="side-content">
            The backend development for custom web must be digned provide a
            higly functional and efficient system that can handle the needs for
            the buiness.
          </p>
        </div>
        <div className="side-wrapper">
          <img src={clientImg} className="c2-icon" alt="" />
          <h6 className="side-heading">Client Satisfied</h6>
          <p className="side-content">
            We work with clients to develop a comprehensive SEO strategy that
            aligns with their business goals and target audience. We conduct
            keyword research, analyze competitors, and define target audience to
            create a strategy that includes website ranking and drives traffic.
          </p>
        </div>
      </div>
    </div>
  );
}
