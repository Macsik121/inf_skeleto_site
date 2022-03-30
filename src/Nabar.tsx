import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IThemes } from "./interfaces";

const Navbar: FC<{
    theme: IThemes,
    styles: {
        linksDarkTheme: React.CSSProperties,
        linksLightTheme: React.CSSProperties
    },
    links: Array<JSX.Element>
}> = ({
    theme,
    styles: {
        linksDarkTheme,
        linksLightTheme
    },
    links
}) => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-wrap">
                    {/* <Link
                        style={theme == "dark" ? linksDarkTheme : linksLightTheme}
                        className="nav-link"
                        to=""
                    >1</Link>
                    <Link style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page2">2</Link>
                    <Link style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page3">3</Link>
                    <Link style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page4">4</Link>
                    <Link style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page5">5</Link> */}
                    {links}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
