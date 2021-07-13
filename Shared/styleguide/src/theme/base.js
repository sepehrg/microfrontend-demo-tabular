import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export function themeCreator(themeName) {
  return themeMap[themeName];
}

const themeMap = {
  lightTheme,
  darkTheme,
};
