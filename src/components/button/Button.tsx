import React from "react";

interface Props {
  text: React.ReactNode | string;
  onClick?: () => void;
  outline?: boolean;
}

const Button = ({ text, onClick, outline }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${
        outline
          ? "bg-light-2 hover:bg-light-3 text-gray-1 border-gray-3"
          : "bg-primary hover:bg-primary-hover text-light border-primary"
      } border px-4 py-2 rounded-3xl text-sm font-semibold transition-colors`}
    >
      {text}
    </button>
  );
};

export default Button;
