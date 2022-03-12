import React, { FC } from "react";
import PageContent from "./PageContent";
import Video from "../Video";

const Page2: FC = () => {
    const pageContent = PageContent(0);
    return (
        <div className="page2">
            <Video />
            <div className="main-content">
                {pageContent}
            </div>
        </div>
    )
}

export default Page2;
