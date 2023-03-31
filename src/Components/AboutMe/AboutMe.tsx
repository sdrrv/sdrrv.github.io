import "./AboutMe.component.scss";
import selfImage from "../../assets/self1.png";
import { calculateAge } from "../../scripts/ageCalculator";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.section>
      <div className="about-me">
        <div className="about-me_text">
          <h2>
            About me <i className="bi-file-person-fill" />
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
          </p>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm a <b>cheerful person</b>, <b>motivated</b> and with great{" "}
            <b>ease in working with a team</b>. <br /> I learn and adapt quickly
            to any situation, making me an ideal worker/co-worker.
          </p>
        </div>

        <img className="about-me_image" src={selfImage} alt="It's me!" />
      </div>
    </motion.section>
  );
}

export default AboutMe;
