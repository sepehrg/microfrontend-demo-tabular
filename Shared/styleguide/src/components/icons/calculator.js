import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const CalculatorIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <g>
        <path
          d="M23.5,1.8H4.5C3.1,1.8,1.9,3,1.9,4.5v18.9c0,1.5,1.2,2.7,2.7,2.7h9.3c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0h9.3
		c1.5,0,2.7-1.2,2.7-2.7V4.5C26.2,3,24.9,1.8,23.5,1.8z M24.8,4.5v8.8H14.7V3.1h8.8C24.2,3.1,24.8,3.8,24.8,4.5z M4.5,3.1h8.8v10.2
		H3.1V4.5C3.1,3.8,3.8,3.1,4.5,3.1z M3.1,23.5v-8.8h10.2v10.2H4.5C3.8,24.8,3.1,24.2,3.1,23.5z M23.5,24.8h-8.8V14.7h10.2v8.8
		C24.8,24.2,24.2,24.8,23.5,24.8z"
        />
        <path
          d="M6.2,8.9h1.4v1.4c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V8.9h1.4c0.4,0,0.6-0.3,0.6-0.6s-0.3-0.6-0.6-0.6H8.9V6.2
		c0-0.4-0.3-0.6-0.6-0.6S7.6,5.9,7.6,6.2v1.4H6.2c-0.4,0-0.6,0.3-0.6,0.6S5.9,8.9,6.2,8.9z"
        />
        <path d="M17.7,8.9h4c0.4,0,0.7-0.3,0.7-0.6s-0.3-0.6-0.7-0.6h-4c-0.4,0-0.7,0.3-0.7,0.6S17.4,8.9,17.7,8.9z" />
        <path
          d="M9.2,19.8l1-1c0.3-0.3,0.3-0.7,0-0.9c-0.3-0.3-0.7-0.3-0.9,0l-1,1l-1-1c-0.3-0.3-0.7-0.3-0.9,0c-0.3,0.3-0.3,0.7,0,0.9l1,1
		l-1,1c-0.3,0.3-0.3,0.7,0,0.9c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2l1-1l1,1c0.1,0.1,0.3,0.2,0.5,0.2
		c0.2,0,0.3-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-0.9L9.2,19.8z"
        />
        <path d="M21.8,20.4h-4c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h4c0.4,0,0.7-0.3,0.7-0.7S22.1,20.4,21.8,20.4z" />
        <path d="M21.8,18.3h-4c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h4c0.4,0,0.7-0.3,0.7-0.7S22.1,18.3,21.8,18.3z" />
      </g>
    </SvgIcon>
  );
};

export default React.memo(CalculatorIcon);
