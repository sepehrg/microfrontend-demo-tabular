import React from "react";
import SvgIcon from "../svgIcon/svgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "40px",
    width: "40px",
    stroke: "none",
    fill: "#6D1646",
    marginLeft: theme.spacing(3),
  },
}));

const StockFaraBourseIcon = (props) => {
  const classes = useStyles();

  return (
    <SvgIcon className={[classes.root, props.className].join(" ")}>
      <path
        d="M9.3,13.6c0.8,0.9,0.9,0.7,1.9,2.3c0.6,0.9,0.8,1.8,1.4,2.8l1.2-2c0.2-0.3,0-0.1,0.3-0.2
		c0.3,0.3,0.8,1.3,1,1.4l0.4,0.8l0.9-1.9c1.8-3.4,3.2-3.6,3.7-4.3c-1.5,0.1-2.5,0.5-3.7,1.2c-0.8,0.5-1.9,1.6-2.2,2.4
		c-0.3-0.2-0.1,0-0.3-0.3c-0.1-0.1-0.1-0.2-0.2-0.4c-1.3-1.6-3.2-2.8-5.5-2.9C8.5,13.1,9,13.2,9.3,13.6L9.3,13.6z M4.7,14.4
		c0.4,1.3,2.7,1,2.4-0.7C6.7,12.2,4.1,12.8,4.7,14.4L4.7,14.4z M12.8,6c0.1,0.6,0.7,1.1,1.3,1c0.6-0.1,1.2-0.6,1.1-1.4
		C15.1,4.2,12.6,4.3,12.8,6L12.8,6z M21,14.3c0.1,0.6,0.7,1.1,1.4,1c0.6-0.1,1.1-0.7,1-1.4C23.2,12.3,20.8,12.5,21,14.3L21,14.3z
		 M6.8,8.7c0.1,0.6,0.7,1.1,1.4,1C8.8,9.6,9.3,9,9.2,8.3C9.1,6.8,6.6,6.8,6.8,8.7L6.8,8.7z M9.2,19.7C8.9,19,9,19.2,8.3,18.8
		c-0.7,0-1.2,0.1-1.5,0.7c-0.2,0.6,0,1.1,0.3,1.4C8.1,21.8,9.4,21,9.2,19.7L9.2,19.7z M15.1,22.8c0.8-1.5-1.6-2.4-2.2-1.1
		C12.2,23.2,14.4,24.1,15.1,22.8L15.1,22.8z M18.4,8.7c0.1,1.4,2.6,1.4,2.4-0.4C20.7,6.9,18.2,6.8,18.4,8.7L18.4,8.7z M18.4,20.3
		c0.1,1.4,2.7,1.4,2.4-0.5C20.6,18.4,18.2,18.4,18.4,20.3L18.4,20.3z M13.9,12.4c0.4-0.2,0.2,0.1,0.4-0.5c0.2-0.5,0.8-4-0.3-4
		C12.7,7.8,13.4,11.8,13.9,12.4L13.9,12.4z M12.5,11.7c0.2,0.4,0.4,0.8,0.9,0.8c0.2-0.8-0.1-1.9-0.3-2.7C12.8,9,12.5,8,11.7,8.3
		C11.1,9,12.1,10.9,12.5,11.7c-0.3-0.6-0.8-1.2-1.1-1.6c-0.7-0.9-1-0.9-1.6-0.8c-0.4,1.2,0.7,1.6,1.3,2.5c-0.7-0.4-1.6-1.2-2.5-0.9
		c-0.3,1,0.6,1.3,1.5,1.8c0.6,0.3,1.9,0.9,2.5,0.6c-0.1-0.4-0.4-0.5-0.6-0.8c0.3,0.2,0.5,0.4,0.9,0.4C12.9,12.3,12.7,12.1,12.5,11.7
		L12.5,11.7z M15.4,11.8c0.3-0.5,1.7-2.8,0.9-3.4c-1-1.1-2.1,3.2-1.7,4.1C15,12.4,15.1,12.1,15.4,11.8l-0.2,1l0.7-0.3
		c-0.1,0.3-0.3,0.4-0.2,0.7c0.8,0,1.8-0.4,2.5-0.8c1.2-0.6,1.6-0.8,1.3-1.8c-1-0.3-2.2,0.7-2.8,1.1c0.2-0.4,2-1.7,1.5-2.5
		c-0.6-0.7-1.3,0.3-1.6,0.8C16.1,10.7,15.7,11.2,15.4,11.8L15.4,11.8z M13.3,20.1c0.8,0.3,1.1,0.2,1.6-0.4c0.5-0.7,0.3-0.9-0.1-1.6
		c-0.2-0.5-0.5-0.9-0.8-1.3c-0.5,0.5-0.6,0.9-1,1.6C12.5,19.6,13,19.3,13.3,20.1L13.3,20.1z M14.1,15.7c0.3-0.3,0.4-0.6,0.7-0.9
		c0.3-0.4,0.5-0.5,0.8-0.8c-0.5-1.5-2.3-1.5-3.1-0.2c0.2,0.4,0.6,0.6,0.8,1C13.5,15,13.8,15.5,14.1,15.7L14.1,15.7z M12.2,22.4
		L12,22.2h-1.1l-0.2,3.3l6.5,0l0-3.3l-1.3,0c-0.3,0.6-0.1,0.7-0.6,1.3C14.5,24.5,12.5,24.3,12.2,22.4L12.2,22.4z M17.5,6
		c0.3,0.4,0.6,0.7,1,0.9C19.3,6.4,20.2,6,21.1,7c1.1,1.1,0.2,2.3,0,2.6l0.9,0.9c0.9-0.6,1.5-1.7,2.4-2.3c-0.8-0.7-1.4-1.4-2.1-2.1
		c-0.7-0.7-1.4-1.4-2.1-2.1l-0.5-0.4L17.5,6z M2.5,17.4l3.3,0l0-1.4C5.3,15.7,4,15.6,4,14.1c0-1.5,1.2-1.7,1.9-1.9l-0.1-1.4
		l-3.2,0.1L2.5,17.4z M19,23.8c0.6,0.2,0.2,0.3,0.8,0.6l4.1-4.1l0.5-0.6c-0.4-0.4-1.9-2-2.4-2.2l-0.9,0.9c0.5,0.9,0.9,1.7,0,2.6
		c-1,1-1.7,0.5-2.6,0.1c-0.4,0.2-0.8,0.6-1,1.1C17.9,22.7,18.6,23.2,19,23.8L19,23.8z M6.9,4.9L3.6,8.2C3.8,8.5,3.8,8.4,4,8.7
		l0.3,0.4c0.7,0.3,1,1,1.6,1.4c0.5-0.3,0.7-0.5,0.9-0.9C6.7,9.1,5.7,8.2,6.9,7c1-1.1,1.8-0.3,2.7,0l0.9-0.8
		c-0.2-0.4-0.3-0.5-0.6-0.8C9.4,4.9,8.7,4,8.2,3.7L6.9,4.9z M25.5,17.4l0-6.6l-3.3,0l0,1.4c0.6,0.2,1.9,0.5,1.8,1.9
		c0,1.6-1.6,1.8-1.9,1.9l0,1.3L25.5,17.4z M10.7,3.1l0,2.7l1.3,0c0,0,0-0.1,0.1-0.1c0.1,0.4,0-1.7,1.9-1.8c1.6,0,1.8,1.5,2,1.9
		l1.4,0l-0.1-3.3c-1.3,0-5.6-0.2-6.6,0.1L10.7,3.1z M4.3,19c-0.1,0.5-0.4,0.2-0.7,1L6,22.3c0.2,0.3,0.4,0.3,0.6,0.6L7.7,24
		c0.2,0.2,0.3,0.3,0.6,0.5c0.2-0.4,0.7-0.8,1.1-1.2c0.4-0.4,0.8-0.7,1.1-1.3c-0.3-0.2-0.6-0.4-0.8-0.8c-0.4,0.1-1.5,1.1-2.7,0
		c-1.2-1.2-0.2-2.3-0.1-2.7c-0.3-0.2-0.2-0.2-0.3-0.3c-0.2-0.2,0,0.1-0.3-0.2c-0.2-0.2-0.1-0.2-0.2-0.4c-0.5,0-0.7,0.3-0.9,0.7
		C4.9,18.6,4.8,18.8,4.3,19L4.3,19z"
      />
    </SvgIcon>
  );
};

export default React.memo(StockFaraBourseIcon);
