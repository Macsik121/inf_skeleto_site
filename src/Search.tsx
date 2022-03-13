import React, { FC, useState } from "react";
import vars from "../vars";
import { Content, IThemes } from "./interfaces";
import { CircularProgress } from "@material-ui/core";

function strongSearch(searchValue: string, matchingValue: string) {
    searchValue = searchValue.toLowerCase();
    matchingValue = matchingValue.toLowerCase();
    // let matchingCount = 0;
    // const neededMatchingCount = 4;
    // const matchedLetters: Array<string> = [];
    // for(let i = 0; i < searchValue.length; i++) {
    //     const currentLetter = searchValue[i];
        // for(let j = 0; j < matchingValue.length; j++) {
        //     const matchingLetter = matchingValue[j];
        //     if (currentLetter == matchingLetter) {
        //         matchingCount++;
        //         matchedLetters.push(currentLetter);
        //     }
        // }
    // }
    if (matchingValue.includes(searchValue)) {
        const splittedResult = matchingValue.split(" ");
        console.log(splittedResult.indexOf(searchValue));
        return { success: true, indexOfWord: splittedResult.indexOf(searchValue) };
    } else
        return { success: false };
    // if (matchingCount >= neededMatchingCount)
    //     return true
    // else
    //     return false
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
                for(let i = 0; i < pageContent.content.length; i++) {
                    const content: Content & { id?: number } = pageContent.content[i];
                    console.log("content type is:", typeof content.content)
                    if (typeof content.content !== "string") {
                        return;
                    }
                    console.log("loop is proceed");
                    const resultContent = strongSearch(search, content.content);
                    if (resultContent.success) {
                        currentContentMatch++;
                        content.id = pageContent.id;
                        contentFound.push(
                            <div
                                key={`${resultContent.success} ${resultContent.indexOfWord} ${content.id} ${i}`}
                                className="searched-page"
                            >
                                <div className="searched-page-id">Номер страницы: {content.id}</div>
                                <div className="searched-page-content">
                                    {(function() {
                                        // if (resultContent.indexOfWord - 2 > 1 && resultContent.indexOfWord + ) {

                                        // }
                                        console.log(resultContent.indexOfWord);
                                        return "Found content: " + content.content.split(" ")[resultContent.indexOfWord];
                                    })()}
                                </div>
                            </div>
                        );
                    }
                    if (currentContentMatch >= maxContentMatch) {
                        break;
                    }
                }
                return (
                    contentFound
                )
            });
            setSearchedPages(result);
            setRendering(false);
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
