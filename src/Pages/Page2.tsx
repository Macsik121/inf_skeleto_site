import React, { FC } from "react";
import PageContent from "./PageContent";
import Video from "../Video";

const Page2: FC = () => {
    const pageId = 2;
    const pageContent = PageContent(pageId);
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
