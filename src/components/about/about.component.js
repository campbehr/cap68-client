import React from "react";

import "./about.styles.css";

const About = () => {
  return (
    <main className="about" id="mission">
      <div className="mission-container">
        <p className="subhead">
          Welcome to CAP68 - the coalition of airline pilots for age 68
          retiremnet. We are experienced U.S. airline pilots advocating to
          change mandatory retirement from age 65 to 68.
        </p>
        <p>
          We are seeking pilots to come on board who believe experience enhances
          safety, and have an interest in volunteering.
        </p>
        <p>We are currently looking for:</p>
        <p>
          * Representatives from each airline to promote and coordinate our
          mission.
        </p>
        <p>
          * Pilots with government affairs experience, social media and public
          reltaions.
        </p>
        <p>Thank you for your interest.</p>
      </div>
    </main>
  );
};

export default About;
