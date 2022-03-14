import React, { FC } from "react";
import { IThemes } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SwitchTheme: FC<{
    setTheme: any,
    theme: IThemes
}> = ({ setTheme, theme }) => {
    return (
        <div className="container toggle-button-container">
            <div
                className={`${theme == "dark" ? "dark" : "light"}-theme-checked switch-theme`}
                onClick={() => {
                    const button = document.getElementById("toggleButton");
                    if (theme == "light") {
                        button.classList.remove("light");
                        button.classList.add("dark");
                    } else if (theme == "dark") {
                        button.classList.remove("dark");
                        button.classList.add("light");
                    }

                    setTheme();
                }}
            >
                <div id="toggleButton" className="dark toggle-button">
                    <div id="toggleCircle" className="toggle-circle"></div>
                    <div className="sun">
                        {/* <FontAwesomeIcon
                            style={{ color: "#f3da35", width: "40px" }}
                            icon={["fas", "sun"]}
                            className="sun"
                        /> */}
                    </div>
                    <div className="moon"></div>
                </div>
            </div>
        </div>
    )
}

export default SwitchTheme;
