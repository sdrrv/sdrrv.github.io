import "./AboutMe.component.scss";
import selfImage from "../../assets/self1.png";
import { calculateAge } from "../../scripts/ageCalculator";
import { motion } from "framer-motion";
import React, { MutableRefObject } from "react";
import ScrollToButton from "../ScrollToButton/ScrollToButton";

type aboutMeProps = {
  selfReference: MutableRefObject<null>;
  previousReference: MutableRefObject<null>;
  nextReference: MutableRefObject<null>;
};

function AboutMe({
  selfReference,
  previousReference,
  nextReference,
}: aboutMeProps) {
  return (
    <motion.section ref={selfReference}>
      <div className="about-me">
        <div className="about-me_text">
          <h2>
            About me <i className="bi-file-person-fill about-me_text-icon" />
          </h2>
          <p>
            <b>Hello! </b>
            <i>👋</i> <br /> My name is <b>Duarte Elvas</b>.{" "}
          </p>
          <p>
            I am a <b>{calculateAge(new Date("2000-10-24"))}-year-old</b>{" "}
            student living in <b>Portugal </b>
            <i>🇵🇹</i>, <br /> and studying Software Engineering & Computer
            Science at{" "}
            <a href="https://tecnico.ulisboa.pt/en/">
              Instituto Superior Técnico.
            </a>
            <i>🎓</i>
          </p>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm a <b>cheerful person</b>, <b>motivated</b> and with great{" "}
            <b>ease in working with a team</b>. <br /> I can also learn and
            adapt quickly to any situation.
          </p>
        </div>

        <img className="about-me_image" src={selfImage} alt="It's me!" />
      </div>
      <ScrollToButton reference={previousReference} toPrevious={true} />
      <ScrollToButton reference={nextReference} />
    </motion.section>
  );
}

export default AboutMe;
