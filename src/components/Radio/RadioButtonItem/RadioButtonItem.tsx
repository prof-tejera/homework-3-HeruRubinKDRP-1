import React from 'react';

export interface iRadioButtonItemProps {
  label : string;
  id : string;
  value : string;
  name : string;
  checked? : boolean;
  onChange? : (event : React.ChangeEvent<HTMLInputElement>) => void;
}
export const RadioButtonItem = (props : iRadioButtonItemProps) => {
  return(
    <div>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.name}>
        {props.label}
      </label>
    </div>
  )
}