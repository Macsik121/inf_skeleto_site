import React, { FC, CSSProperties } from "react";
// import { Link } from "react-router-dom";
// import vars from "../../vars";
// import Video from "../Video";
import { IThemes } from "../interfaces";

const Home: FC<{
    styles: {
        linksDarkTheme: CSSProperties,
        linksLightTheme: CSSProperties
    },
    theme: IThemes
}> = ({
    styles
    // : {
    //     linksDarkTheme,
    //     linksLightTheme
    // }
    ,
    theme
}) => {
    return (
        <div className="home">
            
        </div>
    )
}

export default Home;
