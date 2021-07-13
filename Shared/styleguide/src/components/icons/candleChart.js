import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const CandleChartIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <g>
        <path
          d="M6.5,10.8h-1V6.6c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v4.2h-1c-0.4,0-0.7,0.3-0.7,0.7v5.1
		c0,0.4,0.3,0.7,0.7,0.7h1v1c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7v-1h1c0.4,0,0.7-0.3,0.7-0.7v-5.1
		C7.1,11.1,6.8,10.8,6.5,10.8L6.5,10.8z M5.8,15.8H3.8v-3.7h1.9V15.8z"
        />
        <path
          d="M12.6,15.8h-1v-1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v1h-1c-0.4,0-0.7,0.3-0.7,0.7v3.3
		c0,0.4,0.3,0.7,0.7,0.7h1v1c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7v-1h1c0.4,0,0.7-0.3,0.7-0.7v-3.3
		C13.3,16.1,13,15.8,12.6,15.8L12.6,15.8z M11.9,19.1H10v-1.9h1.9V19.1z"
        />
        <path
          d="M18.7,12.5h-1v-1c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v1h-1c-0.4,0-0.7,0.3-0.7,0.7v3.3
		c0,0.4,0.3,0.7,0.7,0.7h1v4.3c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7v-4.3h1c0.4,0,0.7-0.3,0.7-0.7v-3.3
		C19.4,12.8,19.1,12.5,18.7,12.5L18.7,12.5z M18,15.8h-1.9v-1.9H18V15.8z"
        />
        <path
          d="M24.8,7.5h-1v-1c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7v1h-1c-0.4,0-0.7,0.3-0.7,0.7v4.9
		c0,0.4,0.3,0.7,0.7,0.7h1v2.7c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-2.7h1c0.4,0,0.7-0.3,0.7-0.7V8.2C25.5,7.8,25.2,7.5,24.8,7.5
		L24.8,7.5z M24.2,12.5h-1.9V8.9h1.9V12.5z"
        />
      </g>
    </SvgIcon>
  );
};

export default React.memo(CandleChartIcon);