import ParticleBackground from "./assets/ParticleBackground";
import ReactTypingEffect from "react-typing-effect";
import "./App.scss";
import { motion } from "framer-motion";
import Button from "./Components/Button/Button";

function App() {
  const oldPort = "https://web.tecnico.ulisboa.pt/duartecelvas/";
  const titles = ["Software Engineer", "Developer", "Game Developer"];

  return (
    <>
      <ParticleBackground />
      <div className="App">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 1, type: "tween" }}
        >
          Duarte Elvas
        </motion.h1>
        <motion.p
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, type: "tween" }}
        >
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
        </motion.p>
        <Button> Click Me </Button>
      </div>
    </>
  );
}

export default App;
