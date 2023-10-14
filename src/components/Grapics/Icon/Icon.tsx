import React from "react";
import { IconPlay, IconRewind } from "./IconAssets/Media/MediaIcons";
import { InfoIcon, SuccessIcon, WarningIcon } from "./IconAssets/MessagingIcons";

export type iIcon =
  "rewind" |  "fast-forward" |  "play" | "stop" |
  "error" | "warning" | "info" | "success" ;
export interface iIconProps{
  iconName : iIcon;
  colorOverride? : string;
  classes? : string;
}

export const Icon = (props : iIconProps) => {

  const getIcon = (iconName : iIcon) => {
    switch (iconName) {
      case "rewind":
        return <IconRewind colorOverride={props.colorOverride} classes={props.classes} />

      case "play":
        return <IconPlay colorOverride={props.colorOverride} classes={props.classes} />

      case "fast-forward":
        return <></>

      case "error":
        return <></>

      case "warning":
        return <WarningIcon colorOverride={props.colorOverride} classes={props.classes} />

      case "info":
        return <InfoIcon colorOverride={props.colorOverride} classes={props.classes} />

      case "success":
        return <SuccessIcon colorOverride={props.colorOverride} classes={props.classes}/>
    }
  }
  return (
    <div className="icon">
      {
        getIcon(props.iconName)
      }
    </div>
  )
}

