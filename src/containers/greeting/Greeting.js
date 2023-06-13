import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  const displayResumeLinks = () => {
    const {resumeLinks} = greeting;
    if (resumeLinks && typeof resumeLinks == "string") {
      return (
        <Button
          text="See my resume"
          newTab={true}
          href={greeting.resumeLinks}
        />
      );
    } else if (resumeLinks && Array.isArray(resumeLinks)) {
      return (
        <Button
          text={
            <>
              <span
                style={{marginRight: 3,width:'100%',height:100}}
                onClick={() => {
                  var selectedResumeLink = document.getElementById(
                    "country-select-dropdown"
                  ).value;
                  window.open(selectedResumeLink, "_blank");
                }}
              >
                See my resume
              </span>
              <select
                id="country-select-dropdown"
                name="resumes"
                className="counytry-select"
              >
                {resumeLinks.map((relink, key) => (
                  <option value={relink.link} key={key}>
                    {relink.name}
                  </option>
                ))}
              </select>
            </>
          }
          newTab={true}
          style={{cursor: 'default'}}
        />
      );
    }
    return null;
  };
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">👋</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text="Contact me"
                  href="#contact"
                  style={{marginRight: 5}}
                />
                {/* {greeting.resumeLinks && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )} */}
                {displayResumeLinks()}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/my_image.jpeg")}
              ></img>
            )} */}
            <img
              alt="man sitting on table"
              src={require("../../assets/images/my_image.jpeg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
