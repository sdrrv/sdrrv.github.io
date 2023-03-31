import ParticleBackground from "../../assets/ParticleBackground";
import "./App.scss";
import PopupMenu from "../PopupMenu/PopupMenu";
import WelcomePage from "../WelcomePage/WelcomePage";
import AboutMe from "../AboutMe/AboutMe";
import { useRef } from "react";

function App() {
  const aboutMeRef = useRef(null);
  return (
    <>
      <ParticleBackground />
      <WelcomePage nextReference={aboutMeRef} />
      <AboutMe selfReference={aboutMeRef} />
      <PopupMenu />
    </>
  );
}

export default App;
