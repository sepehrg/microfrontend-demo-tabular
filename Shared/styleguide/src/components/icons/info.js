import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const InfoIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="-465 267 28 28">
      <g>
        <path
          d="M-451,269.5c-6.3,0-11.5,5.2-11.5,11.5c0,6.3,5.2,11.5,11.5,11.5c6.3,0,11.5-5.2,11.5-11.5
		C-439.5,274.7-444.7,269.5-451,269.5z M-451,290.8c-5.4,0-9.8-4.4-9.8-9.8c0-5.4,4.4-9.8,9.8-9.8c5.4,0,9.8,4.4,9.8,9.8
		C-441.2,286.4-445.6,290.8-451,290.8z"
        />
        <path
          d="M-451,279.4c-0.5,0-0.9,0.4-0.9,0.9v5.4c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9v-5.4
		C-450.1,279.7-450.5,279.4-451,279.4z"
        />
        <circle cx="-451" cy="276.3" r="1.2" />
      </g>
    </SvgIcon>
  );
};

export default React.memo(InfoIcon);