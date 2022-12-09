import ParticleBackground from "./assets/ParticleBackground";
import ReactTypingEffect from "react-typing-effect";
import "./App.scss";

function App() {
  const oldPort = "https://web.tecnico.ulisboa.pt/duartecelvas/";
  const titles = ["Software Engineer", "Developer", "Game Developer"];

  return (
    <>
      <ParticleBackground />
      <div className="App">
        <h1>Duarte Elvas</h1>
        <p className="description">
          I am a{" "}
          <b>
            {" "}
            <ReactTypingEffect
              speed={100}
              eraseSpeed={100}
              typingDelay={1500}
              eraseDelay={1500}
              text={titles}
              className="description_titles"
            />{" "}
          </b>
        </p>
        <div className="card">
          <button onClick={() => (window.location.href = oldPort)}>
            Click here
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
