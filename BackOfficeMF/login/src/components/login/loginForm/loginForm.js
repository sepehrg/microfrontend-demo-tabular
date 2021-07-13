import React, { useState, useEffect, useRef } from "react";
import {
  makeStyles,
  Button,
  Input,
  Grid,
  Link,
  KeyboardIcon,
  EyeIcon,
  HideIcon,
  UserIcon,
  KeyIcon,
  Captcha,
  VirtualKeyboard,
  ClickAwayListener,
} from "@prolab/styleguide";
import { notifySucces, notifyError } from "@prolab/common";
import { AccountService } from "@prolab/api";
import clsx from "clsx";
import { navigate } from "@reach/router"
// import { connect } from "react-redux";
// import * as actions from "../../../store/actions/index";
// import style from "../../../shared/style";
// import "react-simple-keyboard/build/css/index.css";

const baseUrl = "http://localhost:6403/api/v1";

const useStyles = makeStyles((theme) => ({
  // ...style(theme),
  root: {
    flexDirection: "column",
    height: "100%",
    minWidth: 380,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginTop: 26,
    flexDirection: "column",
  },
  inputClassName: {
    height: 48,
  },
  adornment: {
    width: 23,
    marginLeft: 10,
    strokeWidth: "32",
    cursor: "pointer",
    "&:hover": {
      fill: theme.palette.primary.main,
    },
  },
  submitBtn: {
    width: "100%",
    backgroundColor: "#03B448",
    color: "#fff",
    boxShadow: "none",
    height: 42,
    marginTop: 26,
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#00a03e",
      boxShadow: "none",
    },
  },
  containedBtn: {
    "&$disabledBtn": {
      backgroundColor: "#00a03e",
      color: "#8dd0a7",
    },
  },
  disabledBtn: {},
  textFieldKeyboard: {
    position: "relative",
  },
  virtualKeyboard: {
    position: "absolute",
    zIndex: 2,
    direction: "ltr",
    right: -15,
    top: "110%",
    height: 230,
    overflow: "hidden",
    transition: "0.3s",
  },
  adornmentRoot: {
    display: "flex",
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [clientId, setClientId] = useState();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [virtualKeyboard, setVirtualKeyboard] = useState("");

  const successfulLoginRedirectUrl = "/main";

  useEffect(() => {
    getClientId();
  }, []);

  const getClientId = () => {
    AccountService.getClientId((status, data) => {
      if (data?.Result) setClientId(data.Result);
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!username) {
      usernameRef.current.focus();
      notifyError("نام کاربری وارد نشده است");
      return;
    }
    if (!password) {
      passwordRef.current.focus();
      notifyError("کلمه عبور وارد نشده است");
      return;
    }
    const data = {
      entity: {
        username,
        password,
        clientId,
        captcha,
      },
    };
    setLoading(true);
    AccountService.login(data, (status, result) => {
      if (status === 200) {
        if (result.Success) {
          successfulLogin(result.Result);
        } else {
          console.log(result.Message);
          getClientId();
          setLoading(false);
        }
      } else {
        notifyError("خطا در برقراری ارتباط با سرور");
        setLoading(false);
      }
    });
  };

  const successfulLogin = (user) => {
    // props.setUser(user);
    // props.fetchPermissions();
    navigate(successfulLoginRedirectUrl);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <form onSubmit={loginHandler} className={classes.form}>
          <ClickAwayListener
            onClickAway={() => {
              return virtualKeyboard === "username"
                ? setVirtualKeyboard("")
                : "";
            }}
          >
            <div className={classes.textFieldKeyboard}>
              <Grid container className={classes.textField}>
                <Grid item>
                  <Input
                    name="username"
                    placeholder="نام کاربری"
                    ref={usernameRef}
                    onChange={(e) => setUsername(e.target.value)}
                    inputClassName={classes.inputClassName}
                    endAdornment={
                      <div>
                        <Link
                          onClick={() =>
                            virtualKeyboard === "username"
                              ? setVirtualKeyboard("")
                              : setVirtualKeyboard("username")
                          }
                        >
                          <KeyboardIcon
                            className={clsx(
                              classes.keyboard,
                              classes.adornment
                            )}
                          ></KeyboardIcon>
                        </Link>
                      </div>
                    }
                    startAdornment={<UserIcon />}
                    value={username}
                  />
                </Grid>
              </Grid>
              {virtualKeyboard === "username" && (
                <div className={classes.virtualKeyboard}>
                  <VirtualKeyboard onChange={(e) => setUsername(e)} />
                </div>
              )}
            </div>
          </ClickAwayListener>
          <ClickAwayListener
            onClickAway={() => {
              return virtualKeyboard === "password"
                ? setVirtualKeyboard("")
                : "";
            }}
          >
            <div className={classes.textFieldKeyboard}>
              <Grid container className={classes.textField}>
                <Grid item>
                  <Input
                    name="password"
                    placeholder="کلمه عبور"
                    ref={passwordRef}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    inputClassName={classes.inputClassName}
                    endAdornment={
                      <div className={classes.adornmentRoot}>
                        <Link
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          {showPassword ? (
                            <HideIcon
                              className={clsx(
                                classes.password,
                                classes.adornment
                              )}
                            ></HideIcon>
                          ) : (
                            <EyeIcon
                              className={clsx(
                                classes.password,
                                classes.adornment
                              )}
                            ></EyeIcon>
                          )}
                        </Link>
                        <Link
                          onClick={() =>
                            virtualKeyboard === "password"
                              ? setVirtualKeyboard("")
                              : setVirtualKeyboard("password")
                          }
                        >
                          <KeyboardIcon
                            className={clsx(
                              classes.keyboard,
                              classes.adornment
                            )}
                          ></KeyboardIcon>
                        </Link>
                      </div>
                    }
                    startAdornment={<KeyIcon />}
                    value={password}
                  />
                </Grid>
              </Grid>
              {virtualKeyboard === "password" && (
                <div className={classes.virtualKeyboard}>
                  <VirtualKeyboard onChange={(e) => setPassword(e)} />
                </div>
              )}
            </div>
          </ClickAwayListener>
          <div>
            <Grid container className={classes.textField}>
              <Grid item>
                <Input
                  name="captcha"
                  placeholder="کد امنیتی"
                  onChange={(e) => setCaptcha(e.target.value)}
                  inputClassName={classes.inputClassName}
                  endAdornment={
                    clientId && (
                      <Captcha
                        onReload={() => getClientId()}
                        className={classes.captchaImage}
                        imageUrl={
                          baseUrl + "/Account/GetCaptcha?clientId=" + clientId
                        }
                      ></Captcha>
                    )
                  }
                ></Input>
              </Grid>
            </Grid>
          </div>
          <div>
            <Button
              type="submit"
              color="primary"
              className={classes.submitBtn}
              disabled={loading}
              containedBtn={classes.containedBtn}
              disabledBtn={classes.disabledBtn}
            >
              {loading ? "درحال بررسی..." : "ورود"}
            </Button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     clientId: state.account.clientId,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setClientId: () => dispatch(actions.setClientId()),
//     setUser: (user) => dispatch(actions.setUser(user)),
//     notifyError: (message) => dispatch(actions.notifyError(message)),
//     fetchPermissions: () => dispatch(actions.fetchPermissions()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginForm;
