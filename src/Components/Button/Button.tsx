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
}: ButtonProps) {
  return (
    <motion.button
      {...animationProps}
      type="button"
      onClick={onClick}
      className={className + " " + typeChecker(buttonType)}
    >
      {children}
    </motion.button>
  );
}

export default Button;
