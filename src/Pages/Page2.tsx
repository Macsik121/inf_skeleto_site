import React, { FC } from "react";
import PageContent from "./PageContent";
import Video from "../Video";

const Page2: FC = () => {
<<<<<<< HEAD
    const pageId = 2;
    const pageContent = PageContent(pageId);
=======
    const pageContent = PageContent(0);
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
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
