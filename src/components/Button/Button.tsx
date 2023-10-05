import React from "react";
import { ButtonStyled } from "./button.styled";


export interface iButtonProps {
  active : boolean;
  label? : string;
  onClick? : () => void;
  classes? : string;
  theme? : 'default' | 'primary' | 'secondary' ;
  hoverType? : 'default-hover' | 'expand-bg'
}

const Button = (props : iButtonProps) => {
  return (
    <ButtonStyled
      className={   `btn ${props.hoverType ?? 'default-hover'} ${props.theme ?? 'default'}  ${props.active ? "Default-button Default-button-active" : "Default-button"}`}
    >
      {
        props.label ? <label>{props.label}</label> : <span className="spacer"/>
      }
      {
        props.hoverType === 'expand-bg' &&
        <div className="expander"/>
      }
    </ButtonStyled>
  );
};

export default Button;
