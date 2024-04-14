import React from "react";
import "../Contact/Contact.css";
import "../App.css";

export default function Contact() {
  return (
    <div className="container sixty-forty-grid">
      <div className="side-text-box form-div">
        <form className="form-contact">
          <div className="input-container">
            <label htmlFor="name">Full name :</label>
            <input required id="name" name="name" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="number">Phone number :</label>
            <input required id="number" name="number" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email address :</label>
            <input required id="email" name="email" type="text" />
          </div>
          <div className="input-container">
            <button name="submit" type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="main-text-box">
        <div className="service-offer-container">
          <div>
            <h3 className="heading-tertiary">CONNECT WITH US</h3>
            <blockquote className="service-tag">
              "Send a request we'll contact you soon."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
