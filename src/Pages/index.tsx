import React, { FC } from "react";
import { Link } from "react-router-dom";
import vars from "../../vars";
import Video from "../Video";

const Home: FC = () => {
    return (
        <div className="home">
            <main className="main">
                <div className="container">
                    {/* <h1>{vars.hTitle}</h1> */}
                    <Video />
                    <h2 className="nav-title">Перейти на страницу:</h2>
                    <nav className="nav">
                        <Link className="nav-link" to="">Главная</Link>
                        <Link className="nav-link" to="page2">Вторая страница</Link>
                        <Link className="nav-link" to="page3">Третья страница</Link>
                        <Link className="nav-link" to="page4">Четвёртая страница</Link>
                        <Link className="nav-link" to="page5">Пятая страница</Link>
                    </nav>
                </div>
            </main>
        </div>
    )
}

export default Home;
