import React from "react";

interface Props {
  text: React.ReactNode | string;
  onClick?: () => void;
  outline?: boolean;
  className?: string;
  xs?: boolean;
}

const Button = ({ text, onClick, outline, className, xs }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        outline
          ? "bg-light-1/70 hover:bg-light-2 text-gray-1 border-gray-3"
          : "bg-primary hover:bg-primary-hover text-light border-primary"
      } border 
      ${
        xs ? "px-2.5 py-1.5 text-xs rounded-2xl" : "px-4 py-2 rounded-3xl"
      } text-sm font-semibold transition-colors ${className ? className : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
