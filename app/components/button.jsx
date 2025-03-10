import React from "react";

const Button = ({ className, onClick, name, icon, ariaLabel }) => {
  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      {icon ? icon : name}
    </button>
  );
};

export default Button;
