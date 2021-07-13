import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  MuiThemeProvider,
  StylesProvider,
  jssPreset,
} from "@material-ui/core/styles";
import { themeCreator } from "./base";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const ThemeSetting = (props) => {
  const themeName = localStorage.getItem("theme") ?? "lightTheme";

  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={themeCreator(themeName)}>
        {props.children}
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default ThemeSetting;
