import React from "react";
import "./Button.component.scss";

type ButtonType = "normal" | "circle" | undefined;

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  buttonType?: ButtonType;
};

function typeChecker(type: ButtonType) {
  switch (type) {
    case "circle":
      return "circle";
    case "normal":
    default:
      return "";
  }
}

function Button({ children, className, onClick, buttonType }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className + " " + typeChecker(buttonType)}
    >
      {children}
    </button>
  );
}

export default Button;
