import React from "react";
import { NavLink } from "react-router-dom";
import Tooltip from "../tooltip/tooltip";
import Box from "@material-ui/core/Box";
import IconButton from "../iconButton/iconButton";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  box: {
    cursor: "pointer",
  },
  navLink: {
    textDecoration: "none",
  },
}));

const Link = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const children = props.children || props.component;

  const iconButton = props.buttonClassName ? (
    <IconButton className={props.buttonClassName}>{children}</IconButton>
  ) : (
    children
  );

  const navLink = props.link ? (
    <NavLink
      to={props.link}
      className={classes.navLink}
      exact={props.exact}
      strict={props.strict}
      activeClassName={props.activeClassName}
    >
      {iconButton}
    </NavLink>
  ) : (
    iconButton
  );

  const box = props.onClick ? (
    <Box
      ref={ref}
      onClick={props.onClick}
      className={clsx(props.className, classes.box)}
    >
      {navLink}
    </Box>
  ) : (
    navLink
  );

  const tooltip = props.title ? (
    <Tooltip
      arrow
      placement={props.tooltipPlacement}
      title={props.title}
      color={props.tooltipColor}
    >
      {box}
    </Tooltip>
  ) : (
    box
  );

  return tooltip;
});

export default React.memo(Link);
