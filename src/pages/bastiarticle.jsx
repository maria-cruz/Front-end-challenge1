import React from "react";
import bastiRecommendation from "../images/basti.jpeg";

const BastiRecommendation = () => {
  return (
    <div>
      <div className="profile-info-wrapper">
        <img
          className="profile-img"
          src={bastiRecommendation}
          alt="basti.jpeg"
        />
        <div className="profile-info">
          <div className="name-container">Sebastian Marcelo</div>
          <div className="job-position">Senior Software Engineer</div>
        </div>
      </div>
      <div className="remarks-container">
        I'd work with her again in a heartbeat.
      </div>
      <p className="expanded-remarks">
        "I cannot recommend Teresa more highly - she's an extremely capable and
        talented Software Engineer, not to mention an A+ human. From the moment
        she joined Ubidy over 2 years ago, Teresa stood out for her work ethic,
        attitude, and intelligence. She is a talented and respected person and
        any company would be lucky to have her."
      </p>
    </div>
  );
};
export default BastiRecommendation;
