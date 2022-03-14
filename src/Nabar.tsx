import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IThemes } from "./interfaces";

const Navbar: FC<{
    theme: IThemes,
    styles: {
        linksDarkTheme: React.CSSProperties,
        linksLightTheme: React.CSSProperties
<<<<<<< HEAD
    },
    links: Array<JSX.Element>
=======
    }
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
}> = ({
    theme,
    styles: {
        linksDarkTheme,
        linksLightTheme
<<<<<<< HEAD
    },
    links
=======
    }
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
}) => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-wrap">
<<<<<<< HEAD
                    {/* <Link
=======
                    <Link
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
                        style={theme == "dark" ? linksDarkTheme : linksLightTheme}
                        className="nav-link"
                        to=""
                    >1</Link>
                    <Link style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page2">2</Link>
                    <Link style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page3">3</Link>
                    <Link style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page4">4</Link>
<<<<<<< HEAD
                    <Link style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page5">5</Link> */}
                    {links}
=======
                    <Link style={theme == "dark" ? linksDarkTheme : linksLightTheme} className="nav-link" to="page5">5</Link>
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
