<<<<<<< HEAD
import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { IThemes } from "../interfaces";
import PageContent from "./PageContent";

const Page4: FC<{
    links: Array<JSX.Element>,
    setLinks: Dispatch<SetStateAction<Array<JSX.Element>>>,
    theme: IThemes,
    styles: {
        linksDarkTheme: React.CSSProperties,
        linksLightTheme: React.CSSProperties
    }
}> = ({
    links,
    setLinks,
    theme,
    styles: {
        linksDarkTheme,
        linksLightTheme
    }
}) => {
    useEffect(() => {
        let newLinks: Array<JSX.Element> = [...links];
        let styles: React.CSSProperties = {  };
        if (theme == "dark") {
            styles = { ...linksDarkTheme }
        } else if (theme == "light") {
            styles = { ...linksDarkTheme }
        }
        styles.transform = "translateY(-25px)";
        styles.opacity = "0";
        styles.pointerEvents = "none";
        styles.transition = "300ms";
        newLinks.push(
            <Link
                style={styles}
                className="nav-link"
                to="page5"
                id="fivthNavLink"
                key="5"
            >5</Link>
        );
        setLinks(newLinks);
        setTimeout(() => {
            const link = document.getElementById("fivthNavLink");
            link.style.transform = "translateY(0)";
            link.style.opacity = "1";
            link.style.pointerEvents = "all";
        }, 1000);
        return () => {
            setLinks((oldLinks: any) => {
                const _newLinks = [ ...oldLinks ];
                _newLinks.pop();
                return _newLinks;
            });
        }
    }, []);
    const pageId = 4;
    const pageContent = PageContent(4);
    return (
        <div className="page4">
            {pageContent}
=======
import React, { FC } from "react";

const Page4: FC = () => {
    return (
        <div className="page4">
            The fourth page
>>>>>>> aa635163f642bfe71f08b5c2aef388654c101331
        </div>
    )
}

export default Page4;
