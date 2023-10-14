import React from "react";
import { InputStyled } from "./input.styled";
import { Icon } from "../Grapics/Icon/Icon";

export interface iInputProps {
  label: string;
  inputName : string;
  type : "text" | "password" | "email" | "number" | "date" | "time" | "datetime-local" | "month" | "week" | "tel" | "url" | "search" | "color";
  message? : string;
  messageType? : "error" | "warning" | "info" | "success";
}
const Input = (props : iInputProps) => {
  return (
    <InputStyled className="input-container">
      <label htmlFor={props.inputName} >{props.label}</label>
      <input type="text" id={props.inputName}/>
      {
        props.message &&
        <div className={`${props.messageType ?? 'info'}`}>
          {
            props.messageType &&
            <Icon iconName={props.messageType} />
          }
          <p>
            {props.message}
          </p>
        </div>
      }
    </InputStyled>
  );
};

export default Input;
