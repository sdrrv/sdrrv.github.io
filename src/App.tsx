import ParticleBackground from "./assets/ParticleBackground";
import ReactTypingEffect from "react-typing-effect";
import "./App.scss";
import { motion } from "framer-motion";
import Button from "./Components/Button/Button";

function App() {
  const titles = ["Software Engineer", "Developer", "Game Developer"];

  return (
    <>
      <ParticleBackground />
      <div className="title">
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
      </div>
      <motion.div
        className="buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1, type: "tween" }}
      >
        <Button
          buttonType="empty"
          animationProps={{
            initial: { x: -100 },
            animate: { x: 0 },
            transition: {
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            },
          }}
        >
          <i className="bi-github" />
        </Button>
        <Button
          buttonType="empty"
          animationProps={{
            initial: { y: 100 },
            animate: { y: 0 },
            transition: {
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            },
          }}
        >
          <i className="bi-linkedin" />
        </Button>
        <Button
          buttonType="empty"
          animationProps={{
            initial: { x: 100 },
            animate: { x: 0 },
            transition: {
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 200,
            },
          }}
        >
          <i className="bi-joystick" />
        </Button>
      </motion.div>
    </>
  );
}

export default App;
