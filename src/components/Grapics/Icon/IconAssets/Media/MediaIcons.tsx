import React from "react";


export interface iconProps {
  colorOverride?: string;
  classes?: string;
}
export const IconPlay = (props : iconProps) => {
  return(
    <svg id="repeat" className={"icon play"} viewBox="0 0 25.77 25.77">
        <path className="filled" style={{fill : props.colorOverride ?? "#333"}}
        d="m21.77,24.3c0,1.15-.81,1.62-1.81,1.04L4.8,14.28c-1.07-.84-1.1-1.91.04-2.82L19.96.42c1-.57,1.81-.1,1.81,1.04v22.84Z" />;
    </svg>
  )
}

export const IconRewind = (props : iconProps) => {
  return(
    <svg id="rewind" className="icon rewind-forward" viewBox="0 0 25.77 25.77" >
      <path className="filled"
        d="m12.38,3.88c-.21,0-.42.07-.59.2,0,0-.02.01-.03.02L.84,12.04s0,0,0,0h-.02c-.28.2-.44.51-.44.84,0,.34.17.65.45.83l10.96,7.97c.17.13.38.2.59.2.55,0,1-.45,1-1,0,0,0,0,0,0v-6.76l10.41,7.57c.17.13.38.2.59.2.55,0,1-.45,1-1,0,0,0,0,0,0V4.89s0,0,0,0c0-.55-.45-1-1-1-.21,0-.42.07-.59.2,0,0-.02.01-.03.02l-10.38,7.55v-6.76s0,0,0,0c0-.55-.45-1-1-1Z" />;
    </svg>
  )
}