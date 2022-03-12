import React from "react";
import vars from "../../vars";

export default function PageContent(index: number) {
    const pageContent = vars.pagesContent[index].content.map((pageContent, i: number) => (
        <pageContent.tag key={i} className={pageContent.class} children={pageContent.content} />
    ));
    return pageContent;
}
