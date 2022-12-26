import "./AboutMe.component.scss";
import selfImage from "../../assets/self1.png";
import { calculateAge } from "../../scripts/ageCalculator";

function AboutMe() {
  return (
    <section>
      <div className="about-me">
        <div className="about-me_text">
          <h2>
            About me <i className="bi-file-person-fill" />
          </h2>
          <p>
            My name is <b>Duarte Elvas</b>, I am a{" "}
            <b>{calculateAge(new Date("2000-10-24"))}-year-old</b> student
            living in <b>Portugal</b>, and studying Software Engineering &
            Computer Science at{" "}
            <a href="https://tecnico.ulisboa.pt/en/">
              Instituto Superior Técnico.
            </a>
          </p>
        </div>

        <img className="about-me_image" src={selfImage} alt="It's me!" />
      </div>
    </section>
  );
}

export default AboutMe;
