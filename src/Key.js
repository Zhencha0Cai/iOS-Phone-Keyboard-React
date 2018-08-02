import React from "react";

export default props => {
  return (
    <span>
      <button onClick={props.handleClick} value={props.value}>
        {props.value}
        <span className="characters">{props.characters}</span>
      </button>
    </span>
  );
};
