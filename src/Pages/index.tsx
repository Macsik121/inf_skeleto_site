import React, { FC, CSSProperties } from "react";
import { IThemes } from "../interfaces";
import PageContent from "./PageContent";

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
    const pageId = 1;
    const pageContent = PageContent(pageId);
    return (
        <div className="home">
            {pageContent}
        </div>
    )
}

export default Home;
