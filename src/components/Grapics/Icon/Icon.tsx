import React from "react";
import { IconPlay } from "./IconAssets/Media/MediaIcons";

export type iIcon = "rewind" | "fast-forward" | "play" | "stop";
export interface iIconProps{
  iconName : iIcon;
  colorOverride? : string;
  classes? : string;
}

export const Icon = (props : iIconProps) => {

  switch (props.iconName) {
    case "rewind":
      return <></>
    case "play":
      return <IconPlay colorOverride={props.colorOverride} classes={props.classes} />
  }
  return <div className="icon"></div>
}

