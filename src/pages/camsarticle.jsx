import React from "react";
import camilleRecommendation from "../images/cams.jpeg";

const CamsRecommendation = () => {
  return (
    <div>
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
  );
};
export default CamsRecommendation;
