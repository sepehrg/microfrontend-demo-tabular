import { createMuiTheme } from "@material-ui/core/styles";
import shared from "./shared";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#22a7f2",
    },
    secondary: {
      main: "#22a7f2",
    },
    background: {
      default: "#222831",
      box: "#2c323b",
      paper: "#363c45",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#aaaaaa",
    },
    icon: {
      primary: "#aaaaaa",
    },
    border: {
      primary: "#4a5059",
      secondary: "#343a43",
      bar: "#40464f",
    },
    color: {
      red: "#fc326a",
      green: "#30c296",
      blue: "#22A7F2",
      yellow: "#ffd500",
    },
    nav: {
      level1: "#4652d8",
      level2: "#3b46b9",
    },
    action: {
      hover: "#22a7f222",
    },
  },
  ...shared,
});
