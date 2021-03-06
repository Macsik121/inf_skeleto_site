import { CSSProperties } from "react";
import globals from "../globals";

const darkTheme = {
    "--base-bg": "rgba(15, 15, 15, .65)",
    color: "#7784bd",
    // backgroundImage: `url(${globals.__UI_SERVER_ENDPOINT__ + "images/bg.gif"})`
} as CSSProperties
const lightTheme = {
    "--base-bg": "#2C2C2B9a",
    color: "#fff",
    // backgroundImage: `url(${globals.__UI_SERVER_ENDPOINT__ + "images/bg2.gif"})`
} as CSSProperties
const bgDarkTheme = {
    backgroundColor: "#1C1C24"
} as CSSProperties
const bgLightTheme = {
    backgroundColor: "#aaa"
} as CSSProperties

const linksDarkTheme = {
    // color: "fff"
    color: "rgba(114, 75, 198, .8)"
} as CSSProperties
const linksLightTheme = {
    color: "rgba(90, 82, 107)"
} as CSSProperties

const searchDarkTheme = {
    backgroundColor: "rgba(255, 255, 255, .747)",
    color: "#000"
} as CSSProperties
const searchLightTheme = {
    backgroundColor: "#1C1C24",
    color: "#fff"
} as CSSProperties

const darkLightThemes = {
    darkTheme,
    lightTheme,
    bgDarkTheme,
    bgLightTheme,
    linksDarkTheme,
    linksLightTheme,
    searchDarkTheme,
    searchLightTheme
};

export default darkLightThemes;
