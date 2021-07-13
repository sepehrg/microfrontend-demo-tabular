import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const CameraIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M23,25.2H5c-1.9,0-3.5-1.6-3.5-3.5V9.8c0-1.9,1.6-3.5,3.5-3.5h1.8c0.3,0,0.5-0.1,0.6-0.3l0.9-1.6c0.6-1,1.6-1.6,2.7-1.6h6
			c1.1,0,2.1,0.6,2.7,1.6L20.6,6c0.1,0.2,0.3,0.3,0.6,0.3H23c1.9,0,3.5,1.6,3.5,3.5v11.8C26.5,23.6,24.9,25.2,23,25.2z M5,8.3
			C4.2,8.3,3.5,9,3.5,9.8v11.8c0,0.8,0.7,1.5,1.5,1.5h18c0.8,0,1.5-0.7,1.5-1.5V9.8c0-0.8-0.7-1.5-1.5-1.5h-1.8
			c-1,0-1.8-0.5-2.3-1.3L18,5.4c-0.2-0.4-0.5-0.6-1-0.6h-6c-0.4,0-0.7,0.2-1,0.6L9.1,6.9C8.7,7.8,7.8,8.3,6.8,8.3H5z M14,21.4
			c-3.4,0-6.1-2.7-6.1-6.1c0-3.4,2.7-6.1,6.1-6.1c3.4,0,6.1,2.7,6.1,6.1C20.1,18.7,17.4,21.4,14,21.4z M14,11.2
			c-2.3,0-4.1,1.8-4.1,4.1c0,2.3,1.8,4.1,4.1,4.1c2.3,0,4.1-1.8,4.1-4.1C18.1,13.1,16.3,11.2,14,11.2z"
      />
    </SvgIcon>
  );
};

export default React.memo(CameraIcon);