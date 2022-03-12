import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import globals from "../globals";
import "./styles/style.css";
// if (!globals.production)
import"/src/images/jotaro.webp";import"/src/images/bg.gif";import"/src/images/video.mp4";import"/src/images/video.gif";
import Routing from "./Routing";

const App: FC = () => {
    return (
        <div className="app">
            <Routing />
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("contents")
)
