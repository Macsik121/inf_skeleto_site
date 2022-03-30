import React, { FC, useState, CSSProperties, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
import Footer from "./Footer";
import "./styles/style.css";
import Routing from "./Routing";
import SwitchTheme from "./SwitchTheme";
import { IThemes } from "./interfaces";
import darkLightThemes from "./darkLightThemes";
import Navbar from "./Nabar";
import Searchbar from "./Search";
import globals from "../globals";

const {
    darkTheme,
    lightTheme,
    bgDarkTheme,
    bgLightTheme,
    linksDarkTheme,
    linksLightTheme,
    searchDarkTheme,
    searchLightTheme
} = darkLightThemes;

const App: FC = () => {
    const [theme, setThemeFunc] = useState<IThemes>("dark");
    const [links, setLinks] = useState<Array<JSX.Element>>([
        <Link
            style={theme == "dark" ? linksDarkTheme : linksLightTheme}
            className="nav-link"
            to=""
            key="1"
        >1</Link>,
        <Link key="2" style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page2">2</Link>,
        <Link key="3" style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page3">3</Link>,
        <Link key="4" style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page4">4</Link>
    ]);
    function setTheme() {
        setThemeFunc(theme == "dark" ? "light" : "dark");
    }
    useEffect(() => {
        console.log(links);
    }, [links]);
    return (
        <div
            style={theme == "dark" ? darkTheme : lightTheme}
            className="app"
            id="app"
        >
            <img
                src={theme == "dark" ? globals.__UI_SERVER_ENDPOINT__ + "images/bg.gif" : globals.__UI_SERVER_ENDPOINT__ + "images/bg2.gif"}
                style={
                    theme == "dark"
                        ? bgDarkTheme
                        : bgLightTheme
                }
                alt="background"
                className="app-background"
            />
            <div className="container">
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
                            links={links}
                            setLinks={setLinks}
                        />
                    </div>
                </div>
            </div>
            <SwitchTheme setTheme={setTheme} theme={theme} />
            <Navbar
                styles={{ linksDarkTheme, linksLightTheme }}
                theme={theme}
                links={links}
            />
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
