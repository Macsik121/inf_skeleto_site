import React, { CSSProperties, Dispatch, FC, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    setTheme: any,
    links: Array<JSX.Element>,
    setLinks: Dispatch<SetStateAction<Array<JSX.Element>>>
}> = ({
    styles,
    theme,
    setTheme,
    links,
    setLinks
}) => {
    const navigate = useNavigate();
    window.onkeydown = function(e: KeyboardEvent) {
        console.log(e)
        if (e.shiftKey) {
            if (e.keyCode === 49)
                navigate("/");
            else if (e.keyCode === 50)
                navigate("/page2")
            else if (e.keyCode === 51)
                navigate("/page3")
            else if (e.keyCode === 52)
                navigate("/page4")
        }
    };
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
            <Route
                path="page4"
                element={
                    <Page4
                        links={links}
                        setLinks={setLinks}
                        styles={styles}
                        theme={theme}
                    />
                }
            />
            <Route path="page5" element={<Page5 />} />
        </Routes>
    )
}

export default Routing;
