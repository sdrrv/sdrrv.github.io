import "./AboutMe.component.scss";
import selfImage from "../../assets/self1.png";

function AboutMe() {
  return (
    <section>
      <div className="about-me">
        <div className="about-me_text">
          <h2>
            About me <i className="bi-file-person-fill" />
          </h2>
        </div>
        <img className="about-me_image" src={selfImage} alt="It's me!" />
      </div>
    </section>
  );
}

export default AboutMe;
