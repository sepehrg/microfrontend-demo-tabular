import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const GridIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <g>
        <path
          d="M4.7,12.7h2.7c1.5,0,2.7-1.2,2.7-2.7V4.7C10,3.2,8.8,2,7.3,2H4.7C3.2,2,2,3.2,2,4.7V10C2,11.5,3.2,12.7,4.7,12.7z M3,4.7
      C3,3.7,3.7,3,4.7,3h2.7C8.3,3,9,3.7,9,4.7V10c0,0.9-0.8,1.7-1.7,1.7H4.7C3.7,11.7,3,10.9,3,10V4.7z"
        />
        <path
          d="M23.3,2h-8.1c-1.5,0-2.7,1.2-2.7,2.7V10c0,1.5,1.2,2.7,2.7,2.7h8.1c1.5,0,2.7-1.2,2.7-2.7V4.7C26,3.2,24.8,2,23.3,2z
       M25,10c0,0.9-0.8,1.7-1.7,1.7h-8.1c-0.9,0-1.7-0.7-1.7-1.7V4.7c0-0.9,0.7-1.7,1.7-1.7h8.1C24.3,3,25,3.7,25,4.7V10z"
        />
        <path
          d="M23.3,15.3h-2.7c-1.5,0-2.7,1.2-2.7,2.7v5.3c0,1.5,1.2,2.7,2.7,2.7h2.7c1.5,0,2.7-1.2,2.7-2.7V18
      C26,16.5,24.8,15.3,23.3,15.3z M25,23.3c0,0.9-0.7,1.7-1.7,1.7h-2.7c-0.9,0-1.7-0.7-1.7-1.7V18c0-0.9,0.7-1.7,1.7-1.7h2.7
      c0.9,0,1.7,0.7,1.7,1.7V23.3z"
        />
        <path
          d="M12.8,15.3H4.7C3.2,15.3,2,16.5,2,18v5.3C2,24.8,3.2,26,4.7,26h8.1c1.5,0,2.7-1.2,2.7-2.7V18
      C15.4,16.5,14.2,15.3,12.8,15.3z M14.4,23.3c0,0.9-0.7,1.7-1.7,1.7H4.7C3.7,25,3,24.3,3,23.3V18c0-0.9,0.7-1.7,1.7-1.7h8.1
      c0.9,0,1.7,0.7,1.7,1.7V23.3z"
        />
      </g>
    </SvgIcon>
  );
};

export default React.memo(GridIcon);
