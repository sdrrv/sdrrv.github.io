import React from "react";
import "./Button.component.scss";

type buttonType = "normal" | "circle";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  buttonType?: buttonType;
};

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <div className={"card " + className}>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
