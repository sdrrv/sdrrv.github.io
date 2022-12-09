import ParticleBackground from "./assets/ParticleBackground";
import "./App.scss";

function App() {
  const oldPort = "https://web.tecnico.ulisboa.pt/duartecelvas/";

  return (
    <>
      <ParticleBackground />
      <div className="App">
        <h1>Duarte Elvas</h1>
        <p className="read-the-docs">
          New portfolio still under development, to see the old one
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
