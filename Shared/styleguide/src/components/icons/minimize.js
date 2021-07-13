import React from "react";
import SvgIcon from "../svgIcon/svgIcon";

const MinimizeIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <rect x="2.3" y="12.6" width="23.5" height="2.6" />
    </SvgIcon>
  );
};

export default React.memo(MinimizeIcon);
