import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const MessagesIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="-465 267 28 28">
      <g>
        <g>
          <path
            d="M-456.6,291.9c-0.2,0-0.3,0-0.5-0.1c-0.4-0.2-0.6-0.5-0.6-1v-2.9h-2.9c-1.4,0-2.5-1.1-2.5-2.5v-12.8
			c0-1.4,1.1-2.5,2.5-2.5h19.2c1.4,0,2.5,1.1,2.5,2.5v12.8c0,1.4-1.1,2.5-2.5,2.5h-9.9l-4.7,3.8
			C-456.2,291.9-456.4,291.9-456.6,291.9z M-460.6,271.4c-0.7,0-1.2,0.6-1.2,1.2v12.8c0,0.7,0.6,1.2,1.2,1.2h3.6
			c0.4,0,0.6,0.3,0.6,0.7v3.1l4.5-3.6c0.1-0.1,0.3-0.1,0.4-0.1h10.1c0.7,0,1.2-0.6,1.2-1.2v-12.8c0-0.7-0.6-1.2-1.2-1.2H-460.6z"
          />
        </g>
        <g>
          <path
            d="M-444.9,277.7h-12.1c-0.4,0-0.6-0.3-0.6-0.6s0.3-0.6,0.6-0.6h12.1c0.4,0,0.7,0.3,0.7,0.6
			S-444.6,277.7-444.9,277.7z"
          />
        </g>
        <g>
          <path
            d="M-447.2,282.5h-7.6c-0.4,0-0.6-0.3-0.6-0.7c0-0.4,0.3-0.6,0.6-0.6h7.6c0.4,0,0.7,0.3,0.7,0.6
			C-446.5,282.2-446.8,282.5-447.2,282.5z"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

export default React.memo(MessagesIcon);
