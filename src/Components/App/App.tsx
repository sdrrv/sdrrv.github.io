import ParticleBackground from "../../assets/ParticleBackground";
import "./App.scss";
import PopupMenu from "../PopupMenu/PopupMenu";
import WelcomePage from "../WelcomePage/WelcomePage";

function App() {
  return (
    <>
      <ParticleBackground />
      <WelcomePage />
      <WelcomePage />
      <WelcomePage />
      <PopupMenu />
    </>
  );
}

export default App;
