import React from "react";
import "../Service/Service.css";
import "../App.css";

import contentImg from "../../img/contentwrite.png";
import socialImg from "../../img/socialMedia.png";
import marketImg from "../../img/marketing.png";
import seoImg from "../../img/seo.png";

export default function Service() {
  return (
    <div className="container grid sixty-forty-grid">
      <div className="side-text-box grid-low-space grid--2--cols">
        <div className="side-wrapper">
          <img src={contentImg} className="c2-icon" alt="" />
          <h6 className="side-heading">Content writing</h6>
          <p className="side-content">
            Our content writing services are designed to help businesses create
            high-quality and enganging that resonates with their target
            audience. Contact us today to learn more about how could we help
            your business create compelling content that drives engangement and
            conversations.
          </p>
        </div>
        <div className="side-wrapper">
          <img src={socialImg} className="c2-icon" alt="" />
          <h6 className="side-heading">Social media strategies</h6>
          <p className="side-content">
            We develop comprehensive social media strategies that align with
            business goals and target audience. Our strategies cover all major
            social media platforms including facebook, twitter, Instagram,
            linkedin and youtube.
          </p>
        </div>
        <div className="side-wrapper">
          <img src={marketImg} className="c2-icon" alt="" />
          <h6 className="side-heading">Content Marketing</h6>
          <p className="side-content">
            We create a range of high quality content including blog posts,
            articles, infographics, videos and social media content that engages
            and informs the target audience.
          </p>
        </div>
        <div className="side-wrapper">
          <img src={seoImg} className="c2-icon" alt="" />
          <h6 className="side-heading">SEO Optimization</h6>
          <p className="side-content">
            We work with clients to develop a comprehensive SEO strategy that
            aligns with their business goals and target audience. We conduct
            keyword research, analyze competitors, and define target audience to
            create a strategy that includes website ranking and drives traffic.
          </p>
        </div>
      </div>
      <div className="main-text-box">
        <div className="service-offer-container digital-marketing">
          <div>
            <h3 className="heading-tertiary">DIGITAL MARKETING</h3>
            <blockquote className="service-tag">
              {" "}
              "Your brand is our passion - let us help you grow"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
