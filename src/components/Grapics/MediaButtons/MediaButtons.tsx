import React, { useState } from "react";

import "./MediaButtons.css";
import Panel from "../../Panel/Panel";
import Button from "../../Button/Button";

const MediaButtons = () => {
  const [activeType, setActiveType] = useState(null);

  const handleClick = (type) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    }
  };

  return (
    <Panel backgroundColor="blue">
      <Button
        active={activeType === "rewind"}
        onClick={() => handleClick("rewind")}
        label="Rewind"
      />
      <Button
        active={activeType === "fast-forward"}
        onClick={() => handleClick("fast-forward")}
        label="Fast Forward"
      />
      <Button
        active={activeType === "play"}
        onClick={() => handleClick("play")}
        label="Play"
      />
      <Button
        active={activeType === "stop"}
        onClick={() => handleClick("stop")}
        label="Stop"
      />
    </Panel>
  );
};

export default MediaButtons;
