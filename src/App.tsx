import React, { FC, useState, CSSProperties } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import "./styles/style.css";
import Routing from "./Routing";
import SwitchTheme from "./SwitchTheme";
import { IThemes } from "./interfaces";
import darkLightThemes from "./darkLightThemes";
import Navbar from "./Nabar";
import Searchbar from "./Search";

const {
    darkTheme,
    lightTheme,
    linksDarkTheme,
    linksLightTheme,
    searchDarkTheme,
    searchLightTheme
} = darkLightThemes;

const App: FC = () => {
    const [theme, setThemeFunc] = useState<IThemes>("dark");
    function setTheme() {
        setThemeFunc(theme == "dark" ? "light" : "dark");
    }
    return (
        <div
            style={theme == "dark" ? darkTheme : lightTheme}
            className="app"
        >
            <div className="container">
                <SwitchTheme setTheme={setTheme} theme={theme} />
                <Searchbar styles={{ searchDarkTheme, searchLightTheme }} theme={theme} />
                <div className="main">
                    <div className="container">
                        <Routing
                            styles={{
                                darkTheme,
                                lightTheme,
                                linksDarkTheme,
                                linksLightTheme
                            }}
                            theme={theme}
                            setTheme={setTheme}
                        />
                    </div>
                </div>
            </div>
            <Navbar styles={{ linksDarkTheme, linksLightTheme }} theme={theme} />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("contents")
)
