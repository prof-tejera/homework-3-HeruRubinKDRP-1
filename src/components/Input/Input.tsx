import React from "react";

export interface iInputProps {
  label: string;

}
const Input = (props : iInputProps) => {
  return (
    <div className="input-container">
      <label>{props.label}</label>
      <input  />
    </div>
  );
};

export default Input;
