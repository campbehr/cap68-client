import React from "react";

import "./about.styles.css";

const About = () => {
  return (
    <main className="about" id="mission">
      <div className="mission-container">
        <p className="subhead">Fellow Pilots,</p>
        <p>
          Welcome to the Coalition For Airline Pilots Age 68 Retirement
          Campaign. Our mission is to raise the mandatory retirement age for
          pilots in the U.S. to age 68.
        </p>
        <p>
          As you may know, on December 13, 2007, Congress enacted the “Fair
          Treatment For Experienced Pilots Act." This raised the mandatory
          retirement age from 60 to 65 - a long, overdue change. Now, in 2022,
          with over 14 years of data collection, we know it was the right thing
          to do because it put <strong>safety</strong> first. Experience
          matters! Currently, with thousands of flight cancellations daily, due
          to a pilot shortage, this is the time to act and keep{" "}
          <strong>experience</strong> in the cockpit.
        </p>
        <p>
          If you are an airline pilot interested in supporting this campaign,
          please “Subscribe” and let us know how you are willing to help. This
          is a grassroots effort that has gained national attention and is
          moving forward at an accelerated pace. Please let us know in what area
          you can offer your assistance with this campaign. We need your
          support!
        </p>
        <p>
          We are also working with{" "}
          <a href="https://raisethepilotage.com/" target="blank_">
            raisethepilotage.com
          </a>
          . Anyone can use this website to voice their concerns about the flight
          disruptions and to support the solution of raising the pilot age.
          Please share this website with your family and friends to give them
          the opportunity to contact their local congressional representatives
          and make their voices heard!
        </p>
        <p>Thank you,</p>
        <p>CAP68</p>
      </div>
    </main>
  );
};

export default About;
