import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const DarkModeIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="-465 267 28 28">
      <path
        d="M-450.2,293.3c-6.8,0-12.3-5.5-12.3-12.3s5.5-12.3,12.3-12.3c0.4,0,0.8,0,1.2,0.1c0.6,0.1,1.1,0.5,1.3,1.2
			c0.1,0.6-0.1,1.2-0.6,1.6c-2.1,1.4-3.4,3.8-3.4,6.4c0,4.2,3.4,7.7,7.7,7.7c0.9,0,1.7-0.1,2.5-0.4c0.6-0.2,1.3,0,1.7,0.5
			c0,0,0,0,0,0c0.4,0.5,0.4,1.2,0.1,1.7C-442,291.1-445.9,293.3-450.2,293.3z M-450.2,270.3c-5.9,0-10.8,4.8-10.8,10.8
			s4.8,10.8,10.8,10.8c3.8,0,7.2-1.9,9.2-5.1l0.6-0.5l-0.6,0.5c0,0,0,0,0,0c-0.9,0.3-1.9,0.5-3,0.5c-5.1,0-9.2-4.1-9.2-9.2
			c0-3,1.5-5.9,4-7.6C-449.5,270.3-449.8,270.3-450.2,270.3z"
      />
    </SvgIcon>
  );
};

export default React.memo(DarkModeIcon);
