import React, { CSSProperties, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { IThemes } from "./interfaces";
import Home from "./Pages";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";

const Routing: FC<{
    styles: {
        darkTheme: CSSProperties,
        lightTheme: CSSProperties,
        linksDarkTheme: CSSProperties,
        linksLightTheme: CSSProperties
    },
    theme: IThemes,
    setTheme: any
}> = ({
    styles,
    theme,
    setTheme
}) => {
    return (
        <Routes>
            <Route path="">
                <Route
                    index
                    element={
                        <Home
                            styles={styles}
                            theme={theme}
                        />
                    }
                />
            </Route>
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
            <Route path="page5" element={<Page5 />} />
        </Routes>
    )
}

export default Routing;
