import React from "react";
import vars from "../../vars";

export default function PageContent(pageId: number) {
    pageId--;
    const pageContent = vars.pagesContent[pageId].content.map((pageContent, i: number) => (
        <pageContent.tag
            key={i}
            className={pageContent.class}
            children={pageContent.content}
        />
    ));
    return pageContent;
}
