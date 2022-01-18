import { ThemeType } from "types";

export const LightTheme: ThemeType = {
  dark: false,
  colors: {
    primary: "#b52b65",
    background: "#ffffff",
    card: "rgb(255, 255, 255)",
    text: "#000000",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export const DarkTheme: ThemeType = {
  dark: true,
  colors: {
    primary: "#b52b65",
    background: "#000000",
    card: "rgb(255, 255, 255)",
    text: "#ffffff",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};
