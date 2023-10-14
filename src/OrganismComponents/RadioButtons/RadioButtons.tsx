import React from "react";
import { iRadioButtonItemProps, RadioButtonItem } from "../../components/Radio/RadioButtonItem/RadioButtonItem";


export interface iRadioButtonGroupProps {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  radioItems: iRadioButtonItemProps[];
  classes?: string;
  groupName : string;
}

export const RadioButtons = (props: iRadioButtonGroupProps) => {
  return (
    <div className={`radio-button-group ${props.classes}`}>
      {
        props.radioItems.map((item, index) => {
          return (
            <RadioButtonItem
              key={index}
              label={item.label}
              name={props.groupName}
              id={item.id}
              value={item.value}
              onChange={props.changeHandler}
            />
          )
        })
      }
    </div>
  );
};

export default RadioButtons;