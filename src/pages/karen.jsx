import React from "react";
import karenRecommendation from "../images/karen.jpeg";

const KarenRecommendation = () => {
  return (
    <div>
      <div className="profile-info-wrapper">
        <img
          className="profile-img"
          src={karenRecommendation}
          alt="karen.jpeg"
        />
        <div className="profile-info">
          <div className="name-container">Karen Nipin</div>
          <div className="job-position">Software Engineer</div>
        </div>
      </div>
      <div className="remarks-container">
        Teresa is not only a fantastic and precise sofware engineer but also an
        inspiring person.
      </div>
      <p className="expanded-remarks">
        "She is very thorough in everything she does and can be depended upon to
        get the job done. Excellent and result driven. She works towards maximal
        customer satisfaction. She showed a high level of react, scss,
        typescript technical skills and was a valuable contributor to our
        projects."
      </p>
    </div>
  );
};
export default KarenRecommendation;
