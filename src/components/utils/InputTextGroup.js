import React from "react";

const InputTextGroup = props => {
  return (
    <div>
      {/* <label for={props.id} className="input-label">{props.label}</label> */}

      <input
        type={props.type}
        className="form-control input input-text"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputTextGroup;
