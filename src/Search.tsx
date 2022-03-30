import React, { FC, useState } from "react";
import vars from "../vars";
import { Content, IThemes } from "./interfaces";
import { CircularProgress } from "@material-ui/core";

function strongSearch(searchValue: string, matchingValue: string) {
    searchValue = searchValue.toLowerCase();
    const matchingValueSplit: Array<string> = matchingValue.toLowerCase().split(" ");
    let index = 0;
    const queryMatches = matchingValueSplit.find((str, i) => {
        if (str.includes(searchValue)) {
            index = i;
            return str.includes(searchValue)
        }
    });

    if (queryMatches) {
        return index;
    }
}

const Search: FC<{
    styles: {
        searchDarkTheme: React.CSSProperties,
        searchLightTheme: React.CSSProperties
    },
    theme: IThemes
}> = ({
    styles: {
        searchDarkTheme,
        searchLightTheme
    },
    theme
}) => {
    const [searchValue, setSearchValue] = useState("");
    const [rendering, setRendering] = useState(false);
    const [searchedPages, setSearchedPages] = useState<Array<Array<JSX.Element>>>([]);
    function searchPages(e: React.ChangeEvent<HTMLInputElement>) {
        const search = e.target.value;
        setSearchValue(search);
        setRendering(true);
        if (search == "") {
            setSearchedPages([]);
            setRendering(true);
            return;
        }
        setTimeout(() => {
            const result: Array<Array<JSX.Element>> = vars.pagesContent.map(pageContent => {
                const maxContentMatch = 3;
                const contentFound: Array<JSX.Element> = [];
                let currentContentMatch = 0;
                let pageContentAsString = "";
                function findChildrensChildren(children: JSX.Element) {
                    if (children.props.children)
                        children = children.props.children;

                    if (typeof children !== "string") {
                        findChildrensChildren(children);
                    } else if (typeof children === "string") {
                        return children;
                    }
                }
                function findReactChildren(content: any) {
                    if (typeof content !== "string") {
                        React.Children.forEach(content, (child) => {
                            const { props: { children } } = child;
                            if (typeof children === "string") {
                                pageContentAsString += children;
                            } else if (children) {
                                if (children.map) {
                                    children.map((childOne: JSX.Element | string, i: number) => {
                                        if (typeof childOne === "string") {
                                            pageContentAsString += childOne;
                                        } else if (typeof childOne !== "string") {
                                            const foundChildren = findChildrensChildren(childOne);
                                            pageContentAsString += foundChildren;
                                            if (children.length == i) {
                                                pageContentAsString += ". ";
                                            }
                                        }
                                    });
                                } else {
                                    if (typeof children.props.children === "string") {
                                        pageContentAsString += children.props.children;
                                    } else {
                                        children.props.children.map((childOne: JSX.Element | string) => {
                                            if (typeof childOne === "string") {
                                                pageContentAsString += childOne;
                                            } else if (typeof childOne !== "string") {
                                                const foundChildren = findChildrensChildren(childOne);
                                                pageContentAsString += foundChildren;
                                            }
                                        }); 
                                    }
                                }
                            }
                        });
                    } else if (typeof content === "string") {
                        pageContentAsString += content;
                    }
                }
                for(let i = 0; i < pageContent.content.length; i++) {
                    const content: Content & { id?: number } = pageContent.content[i];
                    content.id = pageContent.id;
                    findReactChildren(content.content);
                    const matchingIndex = strongSearch(search, pageContentAsString);
                    let foundContent = pageContentAsString.split(" ");
                    let fWordBefore = "";
                    let fWordAfter = "";
                    if (foundContent[matchingIndex - 1])
                        fWordBefore = foundContent[matchingIndex - 1];
                    
                    if (foundContent[matchingIndex + 1])
                        fWordAfter = foundContent[matchingIndex + 1];
                    // const sWordBefore = foundContent[matchingIndex - 2];
                    // const sWordAfter = foundContent[matchingIndex + 2];

                    contentFound.push(
                        <div key={i} className="searched-page">
                            <div className="searched-page-id">Номер страницы: {content.id}</div>
                            <div className="searched-page-content">
                                {fWordBefore.length == 0 ? "" : " "}
                                <span className="highlight">{foundContent[matchingIndex]}</span>&nbsp;
                                {fWordAfter + "..."}
                            </div>
                        </div>
                    );
                }
                return (
                    contentFound
                )
            });
            setRendering(false);
            setSearchedPages(result);
        }, 0);
    }
    return (
        <div className="search">
            <input
                style={theme == "dark" ? searchDarkTheme : searchLightTheme}
                onChange={searchPages}
                className="search-pages"
                type="text"
                placeholder="Поиск по страницам на сайте..."
            />
            <div className="searched-pages">
                {/* {rendering
                    ? (
                        <div className="search-cp-wrap">
                            <CircularProgress className="search-circular-progress" />
                        </div>
                    ) : */}
                    {searchedPages}
                {/* } */}
            </div>
        </div>
    )
}

export default Search;
