import React from "react";
import chelzRecommendation from "../images/chelz.jpeg";

const ChelzRecommendation = () => {
  return (
    <div>
      <div className="profile-info-wrapper">
        <img
          className="profile-img"
          src={chelzRecommendation}
          alt="chelz.jpeg"
        />
        <div className="profile-info">
          <div className="name-container">Chelzea Louise Salvador</div>
          <div className="job-position">Senior Software Engineer</div>
        </div>
      </div>
      <div className="remarks-container">
        Her contribution is valuable to the side, and I highly recommend Teresa.
      </div>
      <p className="expanded-remarks">
        "There is no better colleague than Teresa. She is one of the most
        dedicated professionals I’ve worked with and is willing to put that
        extra help whenever you need it. Her expertise as a software engineer is
        considerable, and it helped our team come up with more efficient
        solutions."
      </p>
    </div>
  );
};
export default ChelzRecommendation;
