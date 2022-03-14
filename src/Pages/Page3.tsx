import React, { FC } from "react";
<<<<<<< HEAD
import PageContent from "./PageContent";

const Page3: FC = () => {
    const pageId = 3;
    const pageContent = PageContent(pageId);
    return (
        <div className="page3">
            {pageContent}
=======

const Page3: FC = () => {
    return (
        <div className="page3">
            The third page
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
        </div>
    )
}

export default Page3;
