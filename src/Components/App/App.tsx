import ParticleBackground from "../../assets/ParticleBackground";
import "./App.scss";
import PopupMenu from "../PopupMenu/PopupMenu";
import WelcomePage from "../WelcomePage/WelcomePage";
import AboutMe from "../Perfil/AboutMe";

function App() {
  return (
    <>
      <ParticleBackground />
      <WelcomePage />
      <AboutMe />
      <PopupMenu />
    </>
  );
}

export default App;
