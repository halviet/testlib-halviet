import React from "react";

interface ButtonProps {
  children: React.ReactNode
}

const Button = ({children}: ButtonProps) => {
  return (
      <button style={{
        width: "100%",
        height: "44px",
        background: "red",
        color: "white",
        fontSize: "16px"
      }}>
        {children}
      </button>
  );
};

export default Button;