<<<<<<< HEAD
import React, { CSSProperties, Dispatch, FC, SetStateAction } from "react";
=======
import React, { CSSProperties, FC } from "react";
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
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
<<<<<<< HEAD
    setTheme: any,
    links: Array<JSX.Element>,
    setLinks: Dispatch<SetStateAction<Array<JSX.Element>>>
}> = ({
    styles,
    theme,
    setTheme,
    links,
    setLinks
=======
    setTheme: any
}> = ({
    styles,
    theme,
    setTheme
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
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
<<<<<<< HEAD
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
=======
            <Route path="page4" element={<Page4 />} />
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
            <Route path="page5" element={<Page5 />} />
        </Routes>
    )
}

export default Routing;
