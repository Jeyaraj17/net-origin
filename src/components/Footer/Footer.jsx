import React from "react";
import "../Footer/Footer.css";
import "../App.css";

import FooterImg from "../../img/footer.png";
import copyrightImg from "../../img/Copyrights.jpg";
import linkedInImg from "../../img/linkedin.png";
import instaImg from "../../img/Instagram.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-quote-div">
        <p className="Footer-quote">
          Unlock your business potential with our services
        </p>
      </div>

      <div className="footer-grid">
        <div className="footer-img-box">
          <img
            className="footer-img"
            src={FooterImg}
            alt="footer image of a phone"
          />
        </div>
        <div className="footer-content-box">
          <h3>Company</h3>
          <ul className="footer-content-list">
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#containerTwo">About us</a>
            </li>
          </ul>
        </div>
        <div className="footer-content-box">
          <h3>Services</h3>
          <ul className="footer-content-list">
            <li>
              <a href="#service">Digital marketing</a>
            </li>
            <li>
              <a href="#sericeTwo">web development</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-last-box">
        <div className="copyright-box">
          <img className="copy-img" src={copyrightImg} alt="copyright image" />
          <p>UDAYAM-TN-07-0075938</p>
        </div>
        <div className="copyright-container">
          <p>Copyright&copy;</p> <p> 2024NetOriginTechnologies</p>
        </div>
        <div className="social-link-box">
          <a href="#">
            <img src={instaImg} alt="instagram" />
          </a>
          <a href="#">
            <img src={linkedInImg} alt="linkedin image" />
          </a>
        </div>
      </div>
    </div>
  );
}
