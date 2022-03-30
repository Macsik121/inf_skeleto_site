import React, { FC } from "react";
import PageContent from "./PageContent";

const Page3: FC = () => {
    const pageId = 3;
    const pageContent = PageContent(pageId);
    return (
        <div className="page3">
            {pageContent}
        </div>
    )
}

export default Page3;
