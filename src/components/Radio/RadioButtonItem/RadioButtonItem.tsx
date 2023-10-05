import React from 'react';

export interface iRadioButtonItemProps {
  label : string;
  icon : string;
}
export const RadioButtonItem = (props : iRadioButtonItemProps) => {
  return(
    <div>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label htmlFor="html">{props.label}</label>
    </div>
  )
}