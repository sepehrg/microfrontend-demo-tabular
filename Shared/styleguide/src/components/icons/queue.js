import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const QueueIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <g>
        <g>
          <path
            d="M10.4,22c-0.2,0-0.3-0.1-0.5-0.2l-7.5-6.3C2,15.1,1.8,14.6,1.8,14c0-0.6,0.3-1.2,0.7-1.5L10,6.1c0.3-0.3,0.7-0.2,1,0.1
			c0.3,0.3,0.2,0.7-0.1,1l-7.5,6.3c-0.1,0.1-0.2,0.2-0.2,0.5c0,0.2,0.1,0.4,0.2,0.5l7.5,6.3c0.3,0.2,0.3,0.7,0.1,1
			C10.8,21.9,10.6,22,10.4,22z"
          />
        </g>
        <g>
          <path
            d="M17.1,22c-0.2,0-0.3-0.1-0.5-0.2l-7.4-6.3c-0.5-0.4-0.7-0.9-0.7-1.6c0-0.6,0.3-1.2,0.7-1.5l7.4-6.3c0.3-0.3,0.7-0.2,1,0.1
			c0.3,0.3,0.2,0.7-0.1,1l-7.4,6.3C10,13.6,9.9,13.7,9.9,14c0,0.2,0.1,0.4,0.2,0.5l7.4,6.3c0.3,0.3,0.3,0.7,0.1,1
			C17.5,21.9,17.3,22,17.1,22z"
          />
        </g>
        <g>
          <path
            d="M24.6,22.3c-0.4,0-0.8-0.1-1.1-0.4l-7.5-6.3c-0.5-0.5-0.7-1-0.7-1.6s0.3-1.1,0.7-1.5l7.5-6.3c0.5-0.4,1.1-0.5,1.7-0.2
			c0.6,0.3,0.9,0.9,0.9,1.5v13.2c0,0.7-0.4,1.3-1,1.5C25,22.2,24.8,22.3,24.6,22.3z M24.6,7.1c0,0-0.1,0-0.1,0.1L17,13.5
			c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.2,0,0.3,0.3,0.5l7.4,6.3c0.1,0.1,0.2,0.1,0.3,0c0.1,0,0.1,0,0.1-0.2V7.4
			C24.8,7.3,24.8,7.2,24.6,7.1C24.6,7.2,24.6,7.1,24.6,7.1z"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

export default React.memo(QueueIcon);
