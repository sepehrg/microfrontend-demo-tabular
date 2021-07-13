import React from "react";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 4,
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
      {
        display: "none",
      },
    "& .Mui-error": {
      fontSize: 11,
    },
  },
  input: {
    backgroundColor: theme.palette.background.paper,
    height: 34,
    borderRadius: 8,
  },
  // marginDense: {
  //   marginRight: -8,
  // },
  // shrink: {
  // marginRight: -5,
  // backgroundColor: theme.palette.border.primary,
  // fontSize: 12,
  // padding: "4px 6px",
  // borderRadius: 5,
  // },
  inputLabel: {
    padding: 0,
  },
  adornedEnd: {
    paddingLeft: 0,
    overflow: "hidden",
  },
  rootLabel: {
    fontSize: 12,
    // backgroundColor: "transparent",
    padding: "4px 6px",
    borderRadius: 5,
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.border.bar,
  },
  formLabelFocused: {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.background.default} !important`,
  },
  // outlined: {
  //   "&$marginDense": {
  //     // transform: "translate(-14px, 9px) scale(1)",
  //     transform: "translate(-14px, -6px) scale(0.75)",
  //     marginRight: -5,
  //   },
  //   "&$shrink": {
  //     transform: "translate(-14px, -6px) scale(0.75)", //
  //   },
  // },
  inputMarginDense: {
    // marginTop: 8,
    paddingTop: 18,
  },
  asterisk: {
    display: "none",
  },
  outlinedRoot: {
    "&:hover $notchedOutline": {
      borderColor: theme.palette.border.bar,
    },
    "&$focused $notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
  notchedOutline: {
    borderColor: theme.palette.border.bar,
  },
  focused: {},
  inputTextField: {
    fontSize: 13,
    "&:-webkit-autofill": {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
      WebkitTextFillColor: theme.palette.text.primary,
      borderRadius: 0,
    },
  },
  formHelperClassName: {
    position: "absolute",
    bottom: -6,
    right: -7,
    backgroundColor: theme.palette.border.secondary,
    borderRadius: 5,
    fontSize: "10px !important",
    padding: "0px 5px",
  },
  // formControl: {
  //   position: "relative",
  // },
  rootLabelMobile: {
    position: "relative",
    transform: "none !important",
    margin: "5px 0 3px 0 !important",
    fontSize: 12,
  },
  notchedOutlineMobile: {
    borderRadius: 8,
  },
  resize: {
    fontSize: 16,
  },
  inputTextFieldMobile: {
    fontSize: 14,
    "&::placeholder": {
      fontSize: 14,
      paddingTop: 5,
    },
  },
  inputMobile: {
    height: 44,
  },
  formLabelFocusedMobile: {
    backgroundColor: "none",
    color: `${theme.palette.text.secondary} !important`,
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

//variant: outline, filled, ""
const Input = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const theme = { ...useTheme(), direction: "rtl" };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        fullWidth
        inputRef={ref}
        type={props.type ?? "text"}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        id={props.id}
        label={props.label}
        value={props.value}
        variant={props.variant ?? "outlined"}
        size={props.size ?? "small"}
        disabled={props.disabled}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        onKeyDown={props.onKeyDown}
        autoComplete={props.autoComplete ?? "off"}
        inputProps={props.inputProps}
        InputProps={{
          inputComponent: props.thousandSeparator && NumberFormatCustom,
          endAdornment: props.endAdornment && (
            <InputAdornment position="end">{props.endAdornment}</InputAdornment>
          ),
          startAdornment: props.startAdornment && (
            <InputAdornment position="start">
              {props.startAdornment}
            </InputAdornment>
          ),
          className: clsx(props.inputClassName, classes.input),
          classes: {
            notchedOutline: clsx(classes.notchedOutline, props.notchedOutline),
            adornedEnd: classes.adornedEnd,
            inputMarginDense: clsx(
              props.label && classes.inputMarginDense,
              props.inputMarginDense
            ),
            root: classes.outlinedRoot,
            notchedOutline: clsx(classes.notchedOutline),
            focused: classes.focused,
            input: clsx(classes.inputTextField),
          },
          ref: props.InputProps && props.InputProps.ref,
        }}
        InputLabelProps={{
          shrink: true,
          classes: {
            root: clsx(classes.rootLabel, props.rootLabel),
            focused: classes.formLabelFocused,
            asterisk: classes.asterisk,
            formControl: classes.formControl,
          },
          ...props.InputLabelProps,
          className: props.inputLabelClassName,
        }}
        required={props.required}
        classes={{
          root: classes.root,
        }}
        error={props.error}
        helperText={props.error && props.helperText}
        FormHelperTextProps={{ className: classes.formHelperClassName }}
        style={props.style}
        autoFocus={props.autoFocus}
      />
    </ThemeProvider>
  );
});

export default React.memo(Input);
