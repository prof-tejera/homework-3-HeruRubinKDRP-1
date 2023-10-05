import React from "react";
import { PanelStyled } from "./panel.styled";

export interface iPanelProps {
  children: React.ReactNode;
  backgroundColor?: string;
}
  const Panel = (props : iPanelProps) => {
    return (
      <PanelStyled className={`panel ${props.backgroundColor ?? ''}`}>
        {props.children}
      </PanelStyled>
    );
  };

  export default Panel;

