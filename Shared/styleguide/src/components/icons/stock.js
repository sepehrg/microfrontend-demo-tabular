import React from "react";
import SvgIcon from "../svgIcon/svgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "40px",
    width: "40px",
    stroke: "none",
    fill: "#B09061",
    marginLeft: theme.spacing(3),
  },
}));

const StockIcon = (props) => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={[classes.root, props.className].join(" ")}
      viewBox="-223 0  512 512"
    >
      <g>
        <path d="M20.1,510.2c0.7-6.4,4.2-10,6.9-17.1c3.1-7.9,2.1-12,7.5-17.3c2.6,12.6,11,26.7,11.8,34.9L20.1,510.2z M25,112.6c-11.3-0.1-21.7,10.6-22.1,21.3c-2.4,3.1-0.4,0.4-2.7,4.2l-2.6,4.9c-13.8-1-57.5-10.5-66.1-16c15-19.4,56.3-39.6,92.3-40.6C16.4,103.8,20.9,98.7,25,112.6L25,112.6z M61.6,126.6c-2.1-8-7.4-9.5-13.4-13.4c-7.3-4.8-1.8,1.7-6.3-5.5c8.6-5.4,7.3-12,1.5-20.7c27.8-2,83.4,23.1,90,40.1c-11.6,5.8-50.8,16.6-64.5,14.7c-2.8-7.2-0.2-5-5-12.5L61.6,126.6z M-8.2,432.4c-7.3,0.2-1-2.6-7.1,1.7c-19.3,2.8-33.2,2.4-33.1-18.4l32.3,9.9C-7,428.6-7.7,424-8.2,432.4L-8.2,432.4z M-22.9,477.7c13-1.4,9.7-5.8,18.4-12.4c6,4.2,3,1.3,5.8,10.1c6.6,9.4,9.7,7.4,14,14.3c-0.2,12.5-6.5,20.7-19.5,21.2c-9.9,0.4-30.9,0.9-39.6-1.3C-44.7,462.2-37.1,491.5-22.9,477.7L-22.9,477.7z M20.1,436.2l-0.9-1.6c5-4.7,18.5-3.2,27.8-2.7c-6.2,10.6-10.3,11.3-13.6,28.5C29.5,448.8,28.9,441,20.1,436.2L20.1,436.2z M126.8,268.5c16,1,26.9-11.3,31-24.6c3.7,1.6,16.2,9.4,19,2.7c7.6,1.8,6.6,4,0.7,26.1c-5.1,19.3-21.8,55.2-37.6,64.4C135.1,315,126.9,292.7,126.8,268.5L126.8,268.5z M174.7,222.6c-8.7-2.8-10.4,1.1-17,4c-1.2-3.8-1.2-5.7-3.9-9.4c-4.4-6.1-2.6-3.2-5.8-4.6c-4.1-8.3-11.5-10.6-22.8-11.9c0.4-19.7,7.2-53.6,17-66.4c12.4,12.9,17.7,20,26.2,37.7c3.9,8.1,6.4,14.1,8.7,23.7C185.4,228.6,182.4,221.4,174.7,222.6L174.7,222.6z M-58.1,201.6c-25.1-1-23.5,14.9-35.1,25.9c-6.7-12.2-17.2-3.9-22.6-1.7c1.2-31.6,22.2-83.9,43.3-93.3C-66.9,155.7-59.9,174.5-58.1,201.6L-58.1,201.6z M-111,245.4c2.2,8.3,15.5,0.7,20.2-1.5c5,10.2,10.5,22.2,24.6,22.5l5.1,3.5c0.4,0.2,1.1,0.7,1.4,1c0.4,0.2,1,0.6,1.5,0.9c-1.4,23.8-12.7,50.8-13.2,68.6c-23.3-23.9-35.2-43.7-42.3-78.3C-117.4,244.2-113.8,247.5-111,245.4L-111,245.4z M14.1,71c94.5-13.8,172.2,60.5,183.1,141.2c13.2,98-58.5,175.8-141.3,186.6c-100,13.1-175.7-58.6-187-143.2c-3.5-27,0.1-51.1,7.8-74.6C-104.3,123.5-55.2,81.1,14.1,71L14.1,71z M13.4,61.8c-52.2,7-92,32.2-113.4,60.3c-25.9,34.1-47.2,74.4-39.9,134.2c10.9,88.5,91,164.2,194.3,151.7c89.4-10.8,163.3-89.6,152-194.2C197.1,126.9,114.2,48.3,13.4,61.8L13.4,61.8z M43.6,382.9c6.7-9.6,4.5-12.6-0.7-22.8c14.6-10.5,21.8-8.9,25-33.3c12.1-1.2,51.6,7.8,62.2,13.2c7.1,3.6,1.6,0.6,4.5,2.8C124,359.5,72.1,385.7,43.6,382.9L43.6,382.9z M-71.4,340.3c20.9-5.1,45.5-11.4,70.3-13.3c5.4,24.4,8.1,20.9,25.3,33.1c-6.1,12.4-4.7,9.1-1.6,23.4C-19.3,381.2-50.2,362.3-71.4,340.3L-71.4,340.3z M-55.9,324.1c3.7-29.8,11-51.5,11.5-85.8c8.8-1,19.6,6.2,24.6,11.9c8.3,9.3,6.7,16,9.5,29.4c12.4,1.4,21.4,2.6,29.2,9.7c4.8,4.4,12.7,16.5,11.7,24C-3.1,313.8-25.9,321.5-55.9,324.1L-55.9,324.1z M78.8,279.5c5.9-25.1,6.4-36.6,32.9-42.3c2.3,34.1,8.4,57.3,13.2,88.2c-32.7-6-49.6-11.7-87.3-12.4C41.8,289.6,54.3,283.2,78.8,279.5L78.8,279.5z M-0.2,200.5c6.4-3.3,12.8-3.7,20-8.1c6.6-4,8.7-8.4,14.6-12.7c15.4,13.5,10.3,12.4,33.5,19.6c2.2,5.5,3.2,12.8,6.7,19.3c5,9.4,8.7,8.7,12.6,16.4c-15.4,17.3-10.6,9.6-19.1,33.7c-24.3,8.4-16.8,6.1-33.7,19.9C22,278.7,21.9,272.7,0,269.4c-2.8-16.8-9.2-27.5-19.6-33.9c3.9-6.5,7.5-7.8,12.2-14.4C-1.8,213-2.8,209.5-0.2,200.5L-0.2,200.5zM38.4,157.1c17.7-0.9,30.2-1.7,47-4.6c14.3-2.5,27.3-7.3,39-9.3c-0.6,9.2-7,28.7-9.1,41.2c-2.8,16.3-3.2,29.9-3.5,46.7c-32.1-6.7-29.4-29.9-33.3-42.4C54.6,186,42.6,178.9,38.4,157.1L38.4,157.1z M-11,189.2c-2.4,24.1-9,38.1-32.5,41.3c-1.7-14.6-2.3-29.4-4.5-44.5c-2.1-14.4-6.9-29-8.4-41.6c36.4,4.7,29.1,10,86.6,12.8C26.1,179.6,12.1,186-11,189.2L-11,189.2zM8.9,81.1C-69,93.4-135.4,165.4-121,258.7c12,77.6,84.7,146,179.6,130.1c76.5-12.8,142.6-84.4,128.8-177.5C175.8,133.3,102.3,66.4,8.9,81.1L8.9,81.1z M109.6,510.7c-16.4,0.2-44.1,4.6-53.4-6.2c-8.3-9.7-7.2-14.3,0.4-20.4c11.4-9.4,5.3-5.4,12.2-18.1c8,1.7,3,0.4,8.9,6.2C98,492,115.8,464.9,109.6,510.7L109.6,510.7z M115,415.6c-1.2,28.9-31.9,20.1-40.4,13.6L115,415.6z M9.4,51.1C117,35.4,204.6,116.9,217.3,209.7c15,109.8-66,197.1-158.8,209.2c-110.3,14.4-196-64.4-209.4-158.6C-165.3,160.4-96.5,66.6,9.4,51.1L9.4,51.1z M-130.6,125.1c-23.7,32.5-26.5,65.6-32.1,73.7c2.3,12.5-1.7,27.1-1.5,40.6c0.4,14.9,2.9,26.7,4.6,40.9c2,3.1,5,15.7,6.7,20.9c19.6,55.5,50.9,80.9,98.1,111c-8.4,8.6-9.3,9.9-19.8,13.6l-8.1,3.4c2.9,10.7,22.1,10.2,29.4,31.3c9.7,28-7,48.5-8,51l7,10.5c21.6,3.8,72.4,1,97.2,1c15.8,0,31.6,0.1,47.5,0.1c21.5,0,28.5,5.1,36.6-11.7c-3.4-9.5-7.6-7.2-9.1-21.5c-2.3-20.8-0.9-33.4,14.4-46.7c12.1-10.6,13.3-2.9,16.8-13.9c-9.2-6.2-18.5-2.9-26.9-17.3c21.2-17.4,31.4-14.4,63.3-51.7c26.1-30.5,26.2-46.6,38.5-73.5c2.9-19.9,6.4-31.8,6.2-54c-0.2-22.1-3.8-32.7-6.8-52.8c-7.7-12.2-15.7-52.9-53.3-87.4c-8.9-8.1-19.5-13.5-25.8-22.6c-6.9-1.2-8.7-3.9-16.8-8.4C37.6,10.9-84.8,46.2-130.6,125.1L-130.6,125.1z" />
      </g>
    </SvgIcon>
  );
};

export default React.memo(StockIcon);
