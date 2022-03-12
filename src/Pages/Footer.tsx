import React, { FC } from "react";
import vars from "../../vars";

const Footer: FC = () => {
    const authors = vars.authors.map(author => (
        <div key={author} className="author">{author}</div>
    ));
    const authorsPhones = vars.authorsPhones.map(authorPhone => (
        <div key={authorPhone} className="author-phone">{authorPhone}</div>
    ));
    return (
        <div className="footer">
            <div className="footer-div authors-wrap">
                <h3>Авторы:</h3>
                <div className="authors">
                    {authors}
                </div>
            </div>
            <div className="footer-div authors-phones-wrap">
                <h3>Контактные телефон/ы</h3>
                <div className="authors-phones">
                    {authorsPhones}
                </div>
            </div>
        </div>
    )
}

export default Footer;
