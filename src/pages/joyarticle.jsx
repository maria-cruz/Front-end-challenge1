import React from "react";
import joyRecommendation from "../images/joy.jpeg";

const JoyRecommendation = () => {
  return (
    <div>
      <div className="profile-info-wrapper">
        <img className="profile-img" src={joyRecommendation} alt="joys.jpeg" />
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
        "Maria Teresa is a highly reliable. She can handle any kinds of tasks,
        She makes sure that her output meets the specification and the
        expectations of our clients. She’s always willing to learn new things."
      </p>
    </div>
  );
};
export default JoyRecommendation;
