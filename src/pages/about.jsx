import React from "react";
import JoyRecommendation from "./joyarticle";
import MaridinRecommendation from "./maridinarticle";
import CamsRecommendation from "./camsarticle";
import JerryRecommendation from "./jerryarticle";
import KarenRecommendation from "./karen";
import ChelzRecommendation from "./chelzarticle";
import BastiRecommendation from "./bastiarticle";

const About = () => {
  return (
    <section className="about-section">
      <div className="recommendations-wrapper">
        <article className="joy-bg span-2 recommendations-item">
          <JoyRecommendation />
        </article>
        <article className="cams-bg recommendations-item">
          <CamsRecommendation />
        </article>
        <article className="maridin-bg recommendations-item">
          <MaridinRecommendation />
        </article>
        <article className="jerry-bg span-2 recommendations-item">
          <JerryRecommendation />
        </article>
        <article className="karen-bg span-2 recommendations-item">
          <KarenRecommendation />
        </article>
        <article className="chelz-bg span-2 recommendations-item">
          <ChelzRecommendation />
        </article>
        <article className="basti-bg recommendations-item">
          <BastiRecommendation />
        </article>
      </div>
    </section>
  );
};

export default About;
