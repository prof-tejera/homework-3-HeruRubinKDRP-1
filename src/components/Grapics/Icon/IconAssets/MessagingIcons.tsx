import React from "react";
import { iIcon } from "../Icon";
import { iconProps } from "./Media/MediaIcons";

export const WarningIcon = (props: iconProps) => {
  return (
    <svg viewBox="0 0 32 32" className="icon-warning">
      <path className="filled"
            style={{ fill: props.colorOverride ?? "#333" }}
            d="m16,1.61C8.05,1.61,1.61,8.05,1.61,16s6.44,14.39,14.39,14.39,14.39-6.44,14.39-14.39S23.95,1.61,16,1.61Zm.17,22.89c-1.54,0-2.31-.77-2.31-2.31s.77-2.31,2.31-2.31,2.31.77,2.31,2.31-.77,2.31-2.31,2.31Zm2.6-15.93l-1.61,9.38h-1.97l-1.61-9.38c-.03-.16-.04-.31-.04-.47,0-1.35.88-2.02,2.64-2.02s2.64.67,2.64,2.01c0,.18-.01.35-.04.49Z" />
    </svg>
  );
};

export const InfoIcon = (props: iconProps) => {
  return (
    <svg viewBox="0 0 32 32" className="icon-warning">
      <path
        className="filled"
        style={{ fill: props.colorOverride ?? "#333" }}
        d="m16,1.61C8.05,1.61,1.61,8.05,1.61,16s6.44,14.39,14.39,14.39,14.39-6.44,14.39-14.39S23.95,1.61,16,1.61Zm.09,8.02c.74,0,1.32.51,1.32,1.25s-.58,1.25-1.32,1.25-1.32-.52-1.32-1.25.58-1.25,1.32-1.25Zm2.15,12.74h-4.33v-.71l1.14-.23c.02-.87.03-1.97.03-2.73v-.83c0-.96-.02-1.5-.05-2.2l-1.25-.16v-.65l3.16-1.11.28.18-.05,2.45v2.31c0,.76,0,1.87.03,2.74l1.06.21v.71Z"
      />
    </svg>
  );
};

export const SuccessIcon = (props: iconProps) => {
  return (
    <svg viewBox="0 0 32 32" className="icon-success">
      <path
        className="filled"
        style={{ fill: props.colorOverride ?? "#333" }}
        d="m11.13,26.35c-.38,0-.77-.15-1.06-.44l-7.95-7.95c-.59-.59-.59-1.54,0-2.12.59-.59,1.54-.59,2.12,0l6.89,6.89L27.76,6.09c.59-.59,1.54-.59,2.12,0,.59.59.59,1.54,0,2.12L12.19,25.91c-.29.29-.68.44-1.06.44Z"
      />
    </svg>
  );
};