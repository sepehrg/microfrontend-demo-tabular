import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  none: {
    display: "none",
  },
}));

const TabPanel = (props) => {
  const classes = useStyles();
  const { children, value, index, className, ...other } = props;

  return (
    <div
      role="tabpanel"
      className={clsx(className, value !== index && classes.none)}
      id={`tabpanel-${index}`}
      {...other}
    >
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel;
