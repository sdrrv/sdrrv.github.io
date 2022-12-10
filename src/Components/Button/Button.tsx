import React from "react";
import "./Button.component.scss";

type ButtonProps = {
  children?: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <div className="card">
      <button> {children} </button>
    </div>
  );
}

export default Button;
