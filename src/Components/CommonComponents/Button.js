import React from "react";

function Button(props) {
  return (
    <button
      style={props.style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
      id={props.id}
      className={props.className}
    >
      {props.buttonValue}
    </button>
  );
}

export default Button;
