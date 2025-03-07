import React from "react";

const button = ({ name, onClick, className }) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {name}
      </button>
    </div>
  );
};

export default button;
