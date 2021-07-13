import React from "react";
import Main from "./components/main/main";
import { ThemeSetting } from "@prolab/styleguide";

export default function Root(props) {
  return (
    <ThemeSetting>
      <Main />
    </ThemeSetting>
  );
}
