import React from "react";
import ReloadIcon from "../icons/reload";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "../grid/grid";
import Link from "../link/link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
  },
  main: {
    display: "flex",
  },
  captchaReload: {
    width: 20,
    fill: "#999",
    marginRight: theme.spacing(5),
    cursor: "pointer",
    "&:hover": {
      fill: theme.palette.primary.main,
    },
  },
  reload: {
    margin: "auto 0px",
  },
}));

const Captcha = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.reload}>
        <Link onClick={props.onReload}>
          <ReloadIcon className={classes.captchaReload}></ReloadIcon>
        </Link>
      </Grid>
      <Grid item className={classes.main}>
        <img className={props.className} src={props.imageUrl} alt="" />
      </Grid>
    </Grid>
  );
};

export default Captcha;
