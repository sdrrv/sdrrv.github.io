import React, { MutableRefObject } from "react";
import "./WelcomePage.component.scss";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import Button from "../Button/Button";
import ScrollToButton from "../ScrollToButton/ScrollToButton";

const titles = ["Software Engineer", "Developer", "Game Developer", "Student"];

type welcomePageProps = {
  selfReference: MutableRefObject<null>;
  nextReference: MutableRefObject<null>;
};

function WelcomePage({ selfReference, nextReference }: welcomePageProps) {
  function handleRedirect(url: string) {
    window.open(url);
  }
  return (
    <section ref={selfReference}>
      <div className="welcome-page">
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
          transition={{ delay: 0.7, duration: 1.5, type: "tween" }}
        >
          <Button
            buttonType="empty"
            animationProps={{
              initial: { x: -100 },
              animate: {
                x: 0,
                transition: {
                  delay: 0.8,
                  duration: 0.8,
                  type: "tween",
                },
              },
            }}
            onClick={() => handleRedirect("https://github.com/sdrrv")}
          >
            <i className="bi-github" />
          </Button>
          <Button
            buttonType="empty"
            animationProps={{
              initial: { y: 100 },
              animate: {
                y: 0,
                transition: {
                  delay: 0.8,
                  duration: 0.8,
                  type: "tween",
                },
              },
            }}
            onClick={() =>
              handleRedirect("https://www.linkedin.com/in/duartecelvas/")
            }
          >
            <i className="bi-linkedin" />
          </Button>
          <Button
            buttonType="empty"
            animationProps={{
              initial: { x: 100 },
              animate: {
                x: 0,

                transition: {
                  delay: 0.8,
                  duration: 0.8,
                  type: "tween",
                },
              },
            }}
            onClick={() => handleRedirect("https://sdrrv.itch.io/")}
          >
            <i className="bi-joystick" />
          </Button>
        </motion.div>
      </div>

      <ScrollToButton reference={nextReference} />
    </section>
  );
}

export default WelcomePage;
