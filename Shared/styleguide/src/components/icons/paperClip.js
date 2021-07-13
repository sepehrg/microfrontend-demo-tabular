import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const ArrowTop = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M18,8.4l-1.2-1.2l-8.6,8.6c-0.7,0.7-1,1.5-1,2.5c0,0.9,0.4,1.8,1,2.5c1.3,1.3,3.6,1.3,4.9,0L24,10c0.9-0.9,1.4-2.1,1.4-3.5
	c0-1.2-0.5-2.4-1.4-3.5c-0.9-0.9-2.1-1.4-3.5-1.4c-1.2,0-2.4,0.5-3.5,1.4L4.4,15.7c-1.2,1.2-1.8,2.8-1.8,4.4c0,1.7,0.7,3.2,1.8,4.4
	c1.2,1.2,2.8,1.8,4.5,1.8c1.7,0,3.2-0.6,4.5-1.8l10.3-10.3l-1.2-1.2L12.1,23.3c-0.8,0.8-2,1.3-3.2,1.3c-1.2,0-2.3-0.5-3.2-1.3
	c-0.8-0.8-1.3-2-1.3-3.2c0-1.2,0.5-2.3,1.3-3.2L18.3,4.3c1.2-1.2,3.2-1.2,4.5,0c0.6,0.6,0.9,1.3,0.9,2.2c0,0.8-0.3,1.6-0.9,2.2
	L11.9,19.5c-0.7,0.7-1.8,0.7-2.5,0C9.1,19.2,9,18.8,9,18.3c0-0.5,0.2-0.9,0.5-1.2L18,8.4z"
      />
    </SvgIcon>
  );
};

export default React.memo(ArrowTop);
