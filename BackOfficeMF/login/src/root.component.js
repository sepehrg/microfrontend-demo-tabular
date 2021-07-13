import React from "react";
import Login from "./components/login/login";
import { ThemeSetting } from "@prolab/styleguide";

export default function Root(props) {
  return (
    <ThemeSetting>
      <Login />
    </ThemeSetting>
  );
}
