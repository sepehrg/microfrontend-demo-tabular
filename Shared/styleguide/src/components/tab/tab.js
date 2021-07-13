import React from "react";
import { default as MuiTab } from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import CloseIcon from "../icons/close";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "inherit",
    minHeight: 38,
  },
}));

const Tab = ({
  isHidden,
  label,
  onClose,
  closeIconClassName,
  closeClassName,
  labelClassName,
  selectedClassName,
  ...rest
}) => {
  const classes = useStyles();

  return !isHidden ? (
    <MuiTab
      component="div"
      classes={{ root: classes.root, selected: selectedClassName }}
      {...rest}
      label={
        <span className={labelClassName}>
          {label}
          {onClose && (
            <IconButton
              size="small"
              onClick={onClose}
              className={closeClassName}
            >
              <CloseIcon className={closeIconClassName} />
            </IconButton>
          )}
        </span>
      }
      disableRipple
    ></MuiTab>
  ) : null;
};

export default React.memo(Tab);
