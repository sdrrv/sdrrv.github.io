import React, { useState } from "react";
import "./PopupMenu.component.scss";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button/Button";

const iconVariants = {
  open: {
    rotate: 90,
    color: "#242424",
    scale: 1.3,
    x: -3,
    y: -2,
  },
  closed: {
    rotate: 0,
    color: "rgba(255, 255, 255, 0.87)",
    scale: 1,
    x: 0,
    y: 0,
  },
};

function PopupMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8, type: "tween" }}
        className="container"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          buttonType="empty"
          className="menu"
          animationProps={{
            animate: isOpen ? "open" : "closed",
            variants: iconVariants,
          }}
        >
          <i className={isOpen ? "bi-x" : "bi-list"} />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="navbar"
            initial={{ y: "-15vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-15vh" }}
            transition={{ duration: 0.5, type: "tween" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default PopupMenu;
