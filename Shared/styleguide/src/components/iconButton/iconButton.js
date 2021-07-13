import React from "react";
import { default as MuiIconButton } from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main}22`, //--color-secondary-hover
    },
  },
}));

const IconButton = (props) => {
  const classes = useStyles();
  
  return (
    <MuiIconButton
      className={clsx([props.className, classes.root])}
      disableRipple
    >
      {props.children}
    </MuiIconButton>
  );
};

export default IconButton;
