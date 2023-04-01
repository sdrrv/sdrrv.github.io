import React from "react";
import "./Button.component.scss";
import { AnimationProps, motion } from "framer-motion";

type ButtonType = "normal" | "circle" | "empty" | undefined;

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  buttonType?: ButtonType;
  animationProps?: AnimationProps;
  disabled?: boolean;
};

function typeChecker(type: ButtonType) {
  switch (type) {
    case "empty":
      return "empty";
    case "circle":
      return "circle";
    case "normal":
    default:
      return "";
  }
}

function Button({
  children,
  className,
  onClick,
  buttonType,
  animationProps,
  disabled = false,
}: ButtonProps) {
  return (
    <motion.button
      {...animationProps}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
      type="button"
      onClick={onClick}
      className={className + " " + typeChecker(buttonType)}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

export default Button;
