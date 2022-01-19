import React from "react";
import joyRecommendation from "../images/joy.jpeg";
import camilleRecommendation from "../images/cams.jpeg";
import maridinRecommendation from "../images/maridin.jpeg";
import jerryRecommendation from "../images/jerry.jpeg";
import bastiRecommendation from "../images/basti.jpeg";
const About = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <div className="joy-bg recommendations-item">
          <div className="profile-info-wrapper">
            <img
              className="profile-img"
              src={joyRecommendation}
              alt="joys.jpeg"
            />
            <div className="profile-info">
              <div className="name-container">Raquel Joy Martinez</div>
              <div className="job-position">
                Team Leader Quality Assurance Engineer
              </div>
            </div>
          </div>
          <div className="remarks-container">
            She is an excellent asset to any company.
          </div>
          <p className="expanded-remarks">
            "Maria Teresa is a highly reliable. She can handle any kinds of
            tasks, She makes sure that her output meets the specification and
            the expectations of our clients. She’s always willing to learn new
            things."
          </p>
        </div>

        <div className="cams-bg recommendations-item">
          <div className="profile-info-wrapper">
            <img
              className="profile-img"
              src={camilleRecommendation}
              alt="cams.jpeg"
            />
            <div className="profile-info">
              <div className="name-container">Camille Basa</div>
              <div className="job-position">
                Software Quality Assurance Engineer
              </div>
            </div>
          </div>
          <div className="remarks-container">
            Teresa is a hard-working and very talented individual.
          </div>
          <p className="expanded-remarks">
            "I've been working with her for the past 2 years. She's good at her
            work, and we always finish the tasks before the deadlines."
          </p>
        </div>

        <div className="maridin-bg recommendations-item">
          <div className="profile-info-wrapper">
            <img
              className="profile-img"
              src={maridinRecommendation}
              alt="maridin.jpeg"
            />
            <div className="profile-info">
              <div className="name-container">Maridin San Miguel</div>
              <div className="job-position">Senior Software Engineer</div>
            </div>
          </div>
          <div className="remarks-container">
            Teresa is a hard-working and very talented individual.
          </div>
          <p className="expanded-remarks">
            "I've been working with her for the past 2 years. She's good at her
            work, and we always finish the tasks before the deadlines."
          </p>
        </div>

        <div className="jerry-bg recommendations-item">
          <div className="profile-info-wrapper">
            <img
              className="profile-img"
              src={jerryRecommendation}
              alt="jerry.jpeg"
            />
            <div className="profile-info">
              <div className="name-container">Jerry, Jr. Macapagal</div>
              <div className="job-position">
                Quality Assurance Automation Engineer
              </div>
            </div>
          </div>
          <div className="remarks-container">
            Teresa is a reliable workmate.
          </div>
          <p className="expanded-remarks">
            "I can see that she's a fast learner and can cope up with each
            situation. She's happy to accept challenges and step out of her
            comfort zone. A truly professional workmate. Keep it up!"
          </p>
        </div>
        <div className="basti-bg recommendations-item">
          <div className="profile-info-wrapper">
            <img
              className="profile-img"
              src={bastiRecommendation}
              alt="basti.jpeg"
            />
            <div className="profile-info">
              <div className="name-container">Sebastian Marcelo</div>
              <div className="job-position">Software Engineer</div>
            </div>
          </div>
          <div className="remarks-container">
            I'd work with her again in a heartbeat.
          </div>
          <p className="expanded-remarks">
            "I cannot recommend Teresa more highly - she's an extremely capable
            and talented Software Engineer, not to mention an A+ human. From the
            moment she joined Ubidy over 2 years ago, Teresa stood out for her
            work ethic, attitude, and intelligence. She is a talented and
            respected person and any company would be lucky to have her."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
