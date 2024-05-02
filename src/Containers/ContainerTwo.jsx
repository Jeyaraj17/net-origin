import React from "react";
import "../Containers/ContainerTwo.css";
import "../components/App.css";

import trustIcon from "../img/trust.png";
import celebrateIcon from "../img/celebrate.png";
import moneyIcon from "../img/money.png";
import SuccessIcon from "../img/increase.png";

export default function ContainerTwo() {
  return (
    <div className="container forty-sixty-grid">
      <div className="main-text-box">
        <div className="main-container">
          <h3 className="heading-tertiary">
            Why should you choose <br />
            <span>Net Origin </span>?
          </h3>
          <div className="main-text-wrp">
            <p>
              As a development agency, we prioritize building trust and lasting
              partnerships with our clients by providing expert guidance
              throughout their digital transformation.
            </p>
            <a className="learn-more" href="#">
              Learn more &gt;
            </a>
          </div>
        </div>
      </div>
      <div className="side-text-box grid-low-space grid--2--cols">
        <div className="side-wrapper">
          <img src={trustIcon} className="c2-icon" alt="" />
          <h6 className="side-heading">Trustworthy relationship:</h6>
          <p className="side-content">
            Creating a trustworthy relationship is paramount, as it lays the
            foundation for delivering excellent service.
          </p>
        </div>
        <div className="side-wrapper">
          <img src={celebrateIcon} className="c2-icon" alt="" />
          <h6 className="side-heading">Commitment to satisfaction</h6>
          <p className="side-content">
            Our focus is not only to provide a service, it is emerged with the
            client's satisfaction.
          </p>
        </div>
        <div className="side-wrapper">
          <img src={moneyIcon} className="c2-icon" alt="" />

          <h6 className="side-heading">Financialy friendly</h6>
          <p className="side-content">
            We prioritize client's satisfaction, not just providing services and
            strive to be financially friendly by offering cost-effective
            solutions that strengthen our customer relationships.
          </p>
        </div>
        <div className="side-wrapper">
          <img src={SuccessIcon} className="c2-icon" alt="" />
          <h6 className="side-heading">Client's success is our top priority</h6>
          <p className="side-content">
            Our client's success is our top priority and we dedicate our
            technologies and niche services with the utmost dedication to
            achieving it.
          </p>
        </div>
      </div>
    </div>
  );
}
