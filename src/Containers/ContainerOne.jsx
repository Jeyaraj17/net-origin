import React from "react";
import "../Containers/ContainerOne.css";
import "../components/App.css";

export default function ContainerOne() {
  return (
    <div className="container grid grid--2--cols">
      <div className="c1-main-text-box">
        <h2 className="heading-secondary center-text">
          Our digital services for your business development
        </h2>
      </div>

      <div className="c1-side-text-box">
        <div className="c1-side-wrapper">
          <h3 className="heading-tertiary">Distinctive Digital presence:</h3>
          <div className="c1-icon-text-conatiner">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <p>
              Our digital services enable business to establish a unique
              presence in the online world.
            </p>
          </div>
        </div>
        <div className="c1-side-wrapper">
          <h3 className="heading-tertiary">E-Enabled Business:</h3>
          <div className="c1-icon-text-conatiner">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>

            <p>
              Our software solutions can assist non-digital business to
              transition into top-performing digital enterprises.
            </p>
          </div>
        </div>
        <div className="c1-side-wrapper">
          <h3 className="heading-tertiary">Expansion of Digital Clientele:</h3>
          <div className="c1-icon-text-conatiner">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <p>
              We offer branding services that help business increase their
              digital clientele and expand their reach in the digital
              marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
