import { createMuiTheme } from "@material-ui/core/styles";
import shared from "./shared";
import "./style.css";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0B90FF",
    },
    secondary: {
      main: "#F15977",
    },
    background: {
      default: "#F4F4FB",
      paper: "#FBFCFD",
      box: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#818794",
    },
    icon: {
      primary: "#565a63",
    },
    border: {
      primary: "#e5e6e6",
      secondary: "#F0F0F3",
      bar: "#E8E9EC",
    },
    color: {
      red: "#FE3957",
      green: "#0CAF82",
      blue: "#0B90FF",
      yellow: "#F9801C",
    },
    nav: {
      level1: "#5764FF",
      level2: "#4b58ea",
    },
    action: {
      hover: "#22a7f222",
    },
  },
  ...shared,
});
