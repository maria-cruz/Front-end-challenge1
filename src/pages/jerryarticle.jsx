import React from "react";
import jerryRecommendation from "../images/jerry.jpeg";

const JerryRecommendation = () => {
  return (
    <div>
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
      <div className="remarks-container">Teresa is a reliable workmate.</div>
      <p className="expanded-remarks">
        "I can see that she's a fast learner and can cope up with each
        situation. She's happy to accept challenges and step out of her comfort
        zone. A truly professional workmate. Keep it up!"
      </p>
    </div>
  );
};
export default JerryRecommendation;
