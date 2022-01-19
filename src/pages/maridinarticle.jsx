import React from "react";
import maridinRecommendation from "../images/maridin.jpeg";

const MaridinRecommendation = () => {
  return (
    <div>
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

      <p className="expanded-remarks">
        "Guiding her in training went well because she's hard-working and
        willing to take challenges."
      </p>
    </div>
  );
};

export default MaridinRecommendation;
