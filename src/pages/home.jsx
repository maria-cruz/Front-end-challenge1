import React from "react";
import { Link } from "react-router-dom";
import creatives from "../images/desktop/image-header.jpg";
import eggImage from "../images/desktop/image-transform.jpg";
import cupImage from "../images/desktop/image-stand-out.jpg";
import cherryImage from "../images/desktop/image-graphic-design.jpg";
import orangeImage from "../images/mobile/image-photography.jpg";
const Home = () => {
  return (
    <div className="home-page">
      <div className="creatives-section">
        <img src={creatives} alt="orange" classname="creative-image" />
        <div className="heading-container">WE ARE CREATIVES</div>
      </div>

      <div className="content-section">
        <div className="content-wrapper">
          <div className="content-item">
            <div className="item-wrapper">
              <h1 className="headline-container">
                Transform your <br />
                brand
              </h1>
              <p className="description-container">
                We are full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you
              </p>
              <div className="upper-link-wrapper">
                <Link to="/about">LEARN MORE</Link>
              </div>
            </div>
          </div>
          <div className="content-item">
            <img src={eggImage} alt="egg" />
          </div>
          <div className="content-item">
            <img src={cupImage} alt="cup" />
          </div>
          <div className="content-item">
            <div className="item-wrapper">
              <h1 className="headline-container">
                Stand out to the right <br />
                audience
              </h1>
              <p className="description-container">
                Using a collaborative formula of designers, researchers,
                photographers, videographers and copywriters, we'll build and
                extend your brand in digital places.
              </p>
              <div className="bottom-link-wrapper">
                <Link to="/about">LEARN MORE</Link>
              </div>
            </div>
          </div>
          <div className="content-item">
            <img src={cherryImage} alt="cherry" />
            <div className="info-wrapper">
              <h3 className="item-label">Graphic design</h3>
              <p className="description-container">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>
          <div className="content-item">
            <img src={orangeImage} alt="orange" />
            <div className="info-wrapper">
              <h3 className="item-label">Photography</h3>
              <p className="description-container">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
