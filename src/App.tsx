import React, { FC } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";
import"./images/jotaro.webp";import"./images/bg.gif";import"./images/video.mp4";import"./images/video.gif";
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
