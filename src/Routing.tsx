import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";

const Routing: FC = () => {
    return (
        <Routes>
            <Route path="">
                <Route index element={<Home />} />
            </Route>
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
            <Route path="page5" element={<Page5 />} />
        </Routes>
    )
}

export default Routing;
