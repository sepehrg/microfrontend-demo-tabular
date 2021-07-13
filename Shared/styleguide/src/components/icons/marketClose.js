import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const MarketCloseIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <g>
        <path
          d="M14.1,6.8V4.9h5.2v1.9h1V4.9h1.5c1.3,0,2.4,1.1,2.4,2.4v5.5h1V7.3c0-1.9-1.5-3.4-3.4-3.4h-1.5V2.5h-1v1.4h-5.2V2.5h-1v1.4
		H8V2.5H7v1.4H5.4C3.5,3.9,2,5.4,2,7.3V22c0,1.9,1.5,3.4,3.4,3.4h7.3v-1H5.4C4.1,24.5,3,23.4,3,22V7.3C3,6,4.1,4.9,5.4,4.9H7v1.9h1
		V4.9h5.2v1.9H14.1z"
        />
        <circle cx="7.5" cy="11.7" r="1" />
        <circle cx="11.6" cy="11.7" r="1" />
        <circle cx="15.7" cy="11.7" r="1" />
        <path d="M18.8,11.7c0,0.6,0.5,1,1,1c0.6,0,1-0.5,1-1c0-0.6-0.5-1-1-1C19.2,10.7,18.8,11.1,18.8,11.7z" />
        <circle cx="7.5" cy="15.8" r="1" />
        <circle cx="11.6" cy="15.8" r="1" />
        <circle cx="7.5" cy="19.9" r="1" />
        <circle cx="11.6" cy="19.9" r="1" />
        <path
          d="M19.8,13.6c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2c3.4,0,6.2-2.8,6.2-6.2C26,16.4,23.2,13.6,19.8,13.6z M19.8,25
		c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2C25,22.7,22.7,25,19.8,25z"
        />
        <polygon
          points="21.6,17.3 19.8,19.1 17.9,17.3 17.2,18 19.1,19.8 17.2,21.6 17.9,22.3 19.8,20.5 21.6,22.3 22.3,21.6 20.5,19.8 
		22.3,18 	"
        />
      </g>
    </SvgIcon>
  );
};

export default React.memo(MarketCloseIcon);