import ParticleBackground from "../../assets/ParticleBackground";
import "./App.scss";
import PopupMenu from "../PopupMenu/PopupMenu";
import WelcomePage from "../WelcomePage/WelcomePage";

function App() {
  return (
    <>
      <ParticleBackground />
      <WelcomePage />
      <PopupMenu />
    </>
  );
}

export default App;
