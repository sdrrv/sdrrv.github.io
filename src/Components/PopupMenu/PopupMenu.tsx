import React, { useRef } from "react";
import "./PopupMenu.component.scss";
import { motion, useCycle } from "framer-motion";
import Button from "../Button/Button";

type props = {
  className?: string;
};

function PopupMenu({ className }: props) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.6, duration: 1, type: "tween" }}
      className="container"
    >
      <motion.nav
        className={className}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <Button buttonType="circle" className="menu">
          <i className="bi-list" />
        </Button>
      </motion.nav>
    </motion.div>
  );
}

export default PopupMenu;
