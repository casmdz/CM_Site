import React, { useState } from "react";
import "./tooltip.scss";

// const Tooltip = ({ content, direction, delay, children}) => {
const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);
  const contentProp = props.content || "N/A"; //falsy
  
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };
  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onTouchStart={showTip}
      onTouchEnd={hideTip}
    >
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {contentProp}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
