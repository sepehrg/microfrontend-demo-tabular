import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const DownloadIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <g>
        <path
          d="M13.4,19c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.2-0.2
		c0,0,0,0,0,0l5.9-5.9c0.3-0.3,0.3-0.9,0-1.2c-0.3-0.3-0.9-0.3-1.2,0l-4.5,4.4v-13c0-0.5-0.4-0.9-0.8-0.9c-0.5,0-0.9,0.4-0.9,0.9v13
		l-4.4-4.4c-0.3-0.3-0.9-0.3-1.2,0s-0.3,0.9,0,1.2L13.4,19z"
        />
        <path d="M23.5,23.8h-19c-0.5,0-0.9,0.4-0.9,0.8s0.4,0.8,0.9,0.8h19c0.5,0,0.8-0.4,0.8-0.8S24,23.8,23.5,23.8z" />
      </g>
    </SvgIcon>
  );
};

export default React.memo(DownloadIcon);
