import React, { useState } from "react";
import { Grid, makeStyles } from "@prolab/styleguide";
import poster from "../../assets/images/FaraTraderPoster.jpg";
import LoginForm from "./loginForm/loginForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.nav.level1,
    flexDirection: "column",
    "&:before": {
      content: "''",
      width: "100%",
      height: "100%",
      backgroundImage: `url(${poster})`,
      opacity: 0.3,
      filter: "blur(10px)",
      position: "absolute",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 0",
      backgroundSize: "cover",
    },
  },
  header: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 20,
    zIndex: 1,
  },
  content: {
    backgroundColor: `${theme.palette.background.box}44`,
    border: `1px solid ${theme.palette.background.box}33`,
    boxShadow: "0px 0px 15px #0002",
    zIndex: 1,
    padding: 30,
    borderRadius: 15,
  },
  footer: {
    color: "#FFF",
    fontSize: 11,
    marginTop: 10,
    zIndex: 1,
    opacity: 0.7,
  },
}));

let firstRender = true;

const Login = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.header}>
        ورود به مدیریت کارگزاری
      </Grid>
      <Grid item className={classes.content}>
        <LoginForm />
      </Grid>
      <Grid item className={classes.footer}>
        نسخه 1.0.1
      </Grid>
    </Grid>
  );
};

export default Login;
