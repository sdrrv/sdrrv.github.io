import ParticleBackground from "../../assets/ParticleBackground";
import "./App.scss";
import PopupMenu from "../PopupMenu/PopupMenu";
import WelcomePage from "../WelcomePage/WelcomePage";
import AboutMe from "../AboutMe/AboutMe";
import { useRef } from "react";
import TimeLine from "../TimeLine/TimeLine";

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const timeLineRef = useRef(null);
  return (
    <>
      <ParticleBackground />
      <WelcomePage selfReference={homeRef} nextReference={aboutMeRef} />
      <AboutMe
        selfReference={aboutMeRef}
        previousReference={homeRef}
        nextReference={timeLineRef}
      />
      <TimeLine
        selfReference={timeLineRef}
        previousReference={aboutMeRef}
        nextReference={homeRef}
      />
      <PopupMenu />
    </>
  );
}

export default App;
