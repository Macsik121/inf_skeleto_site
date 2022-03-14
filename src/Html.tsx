import React, { FC } from "react";
import vars from "../vars";

const HTML: FC = () => {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <title>{vars.title}</title>
                <link rel="stylesheet" href="/app.styles.css" />
            </head>
            <body>
                <div id="contents"></div>
                <script src="/app.bundle.js"></script>
            </body>
        </html>
    )
}

export default HTML;
