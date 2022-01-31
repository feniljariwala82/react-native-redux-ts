import { ThemeType } from "types";
import {
  DefaultTheme,
  DarkTheme as DefaultDarkTheme,
} from "@react-navigation/native";

export const LightTheme: ThemeType = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#b52b65",
    text: "#000000",
  },
};

export const DarkTheme: ThemeType = {
  ...DefaultDarkTheme,
  dark: true,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: "#b52b65",
    text: "#ffffff",
  },
};
