import React from "react";

React;

interface Props {
  children: String;
  color?: "primaray" | "secondary";
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
