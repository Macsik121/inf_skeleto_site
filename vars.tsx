import React from "react";
import { Link } from "react-router-dom";
import { IThemes, PageContent } from "./src/interfaces";
import globals from "./globals";
import darkLightThemes from "./src/darkLightThemes";

const { linksDarkTheme, linksLightTheme } = darkLightThemes;

const vars: {
    title: string,
    hTitle: string,
    authors: Array<string>,
    authorsPhones: Array<string>,
    pagesContent: Array<PageContent>
} = {
    title: "Наш сайт",
    hTitle: "Поставки оружия, или любой другой заголовок",
    authors: [ "Даниил Робышев", "Андрей Малов" ],
    authorsPhones: [ "+7...телефон Дани", "+7...телефон Андрея" ],
    pagesContent: [
        {
            id: 1,
            title: "",
            content: [
                {
                    tag: "ul",
                    class: "main-list",
                    content: [
                        <li className="main-list-item creepy-item" key="1">
                            Первый&nbsp;
                            <span className="creepy-wrap">
                                <span>horror</span>
                            </span>
                        </li>,
                        <li className="main-list-item creepy-item" key="2">
                            Чем&nbsp;
                            <span className="neon">страшны</span>&nbsp;
                            <span className="creepy-wrap">horrors</span>
                        </li>,
                        <li className="main-list-item creepy-item" key="3">
                            <span className="creepy-wrap">Horrors</span>,
                            которые <span className="neon">стоит</span> посмотреть
                        </li>
                    ]
                },
                {
                    tag: "p",
                    class: "text creepy-item",
                    content: [
                        <span key="1">
                            Tематически обширный и разнообразный круг фильмов, призванных вызвать у зрителей <span style={{ animation: "flicker 2.5s infinite alternate" }} className="neon">чувство страха, тревоги</span> тревоги и неопределённости, создать напряжённую атмосферу ужаса или мучительного ожидания чего-либо <span className="creepy-wrap">terrible</span> — так называемый эффект <span className="creepy-wrap">“suspense”</span> (от англ. suspense — неопределённость). <span className="creepy-wrap">However</span> касательно именования жанра существуют и другие мнения. Так, известный в <span className="creepy-wrap">horror</span>-кругах актёр&nbsp;<span className="creepy-wrap">Kristoffer</span>&nbsp;<span style={{ animation: "flicker 3s infinite alternate" }} className="neon">Ли</span> в одном из своих интервью, данном <span className="neon">в 1975 году</span>, утверждал, что термин <span style={{ animation: "flicker 4s infinite alternate" }} className="creepy-wrap">"horror"</span> неверен, поскольку ужас подразумевает чувство отвращения или омерзения, что отнюдь не является целью этих картин, по крайней мере, почти всегда. Условность таких фильмов делает их безвредными. Он настаивал на употреблении термина <span style={{ animation: "flicker 5s infinite alternate" }} className="creepy-wrap neon">«film du fantastique»</span> (фильм фантазии). Таким же термином французы обозначают определённый тип фильмов ужасов.
                        </span>
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "",
            content: [
                {
                    tag: "p",
                    class: "text creepy-item creepy",
                    content: [
                        <span key="1">
                            Cтрах не самая приятная эмоция, но страх страху рознь. Вам вряд ли захочется оказаться в реальной заброшенной психиатрической больнице вместе с призраками, а вот провести вечер за прохождением игры, просмотром фильма или сходить в развлекательный парк другое дело. И если раньше страх помогал нам выживать, то теперь он больше помогает снят стресс. Для того чтобы подобный страх работал так как нужно, необходим контролируемый относительно безопасный страх. С удовольствием в комментариях почитаю ваше отношение к хоррорам. Расскажите о своем любимом произведение и что именно вас в нем пугает или нравится.
                        </span>
                    ]
                },
                {
                    tag: "p",
                    class: "text creepy-item",
                    content: [
                        <span className="neon" key="2">
                            Dля того чтобы начать разбираться как именно вас пугают хорроры, необходимо их классифицировать
                        </span>
                    ]
                },
                {
                    tag: "p",
                    class: "text creepy-item",
                    content: [
                        <span key="3">
                            Cреда может иметь мистическую или паранормальную природу
                        </span>
                    ]
                },
                {
                    tag: "p",
                    class: "text creepy-item",
                    content: [
                        <span key="3">
                            Tакже сеттинг может быть более реалистичным
                        </span>
                    ]
                },
                {
                    tag: "div",
                    class: "text-wrap",
                    content: [
                        <p key="1" className="text creepy-item">
                            Cтрах неизвестного. До тех пор пока не знаем, с чем конкретно мы столкнулись и как этому можно противостоять нам будет некомфортно. Этот прием применяться практически в каждом хорроре, не только играх но и в фильмах.
                            <span
                                style={{
                                    textShadow: `
                                        0 0 4px #fff,
                                        0 0 11px #fff,
                                        0 0 19px var(--main-color),
                                        0 0 40px var(--main-color),
                                        0 0 80px var(--main-color),
                                        0 0 90px var(--main-color),
                                        0 0 100px var(--main-color),
                                        0 0 150px var(--main-color)
                                    `,
                                    animation: "none",
                                }}
                            >Вспоминаем фильм Челюсти, где акулу не показывают полностью, только частями и конечно акулий плавник, который рассекает воду и нагнетает атмосферу.</span>
                        </p>,
                        <p key="2" className="text creepy-item">
                            <span className="creepy-wrap">Страх известного. После того как мы в первый раз увидели противника или поняли его природу, а также стали понимать правила игры, задача разработчиков стоит в том, чтобы страх не исчезал.</span> Это может достигаться созданием ощущения чужеродности противника, а также разработчики могут играть на распространённых фобиях, а об этом по подробней: Танатафобия - боязнь смерти, одна из самый распространенных фобий, которая также является хорошим мотиватором, проигрыш равно смерть
                        </p>
                    ]
                },
                {
                    tag: "p",
                    class: "text creepy-item",
                    content: [
                        <span key="4">
                            Cледующий излюбленный прием это фактор неожиданности
                        </span>
                    ]
                },
                {
                    tag: "p",
                    class: "text creepy-item",
                    content: [
                        <span key="5">
                            Cледующим немаловажным приемом будет управление эмоциональным напряжением, с моментами пика и относительно спокойного геймплея, чтобы происходила разрядка.
                        </span>
                    ]
                },
                {
                    tag: "p",
                    class: "text creepy-item",
                    content: [
                        <span key="6">
                            Zвуковое сопровождение играет огромную роль в создании нужной атмосферы. Применяется как довольно специфический саундтрек так и различные звуковые эффекты как скрипы, шорохи, вздохи, звук ветра, шагов и так далее, а также использование <span className="neon">тишины</span>.
                        </span>
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "",
            content: [
                {
                    tag: "div",
                    class: "movie",
                    content: [
                        <img
                            src={globals.__UI_SERVER_ENDPOINT__ + "images/pila.jpg"}
                            alt="Астрал 2011, (все части). Триллер"
                            className="movie-img"
                            key="1"
                        />,
                        <div key="2" className="movie-description-wrap">
                            <h3 className="movie-title">Insidious 2011, thriller</h3>
                            <p className="movie-description">
                                «Астрал» — серия фильмов сценариста Ли Уоннелла, снимается с 2010 года. Серия фильмов выпущена компанией Blumhouse Productions и состоит из 4 фильмов в жанре фильм ужасов, начиная с «Астрала» и на данный момент заканчивая «Астрал 4: Последний ключ».
                            </p>
                        </div>
                    ]
                },
                {
                    tag: "div",
                    class: "movie",
                    content: [
                        <img
                            src={globals.__UI_SERVER_ENDPOINT__ + "images/babaduk.jpg"}
                            alt=""
                            className="movie-img"
                            key="2"
                        />,
                        <div key="1" className="movie-description-wrap">
                            <h3 className="movie-title">The Babadook 2015, Thriller</h3>
                            <p className="movie-description">
                                Шесть лет назад Амелия в один день потеряла мужа и родила сына. Сэмуэлю идёт уже седьмой год, но ему везде мерещатся чудовища. Однажды перед сном мальчик просит маму почитать ему найденную книгу об ужасном монстре. С этого момента его страхи получают физическое воплощение в жутком Бабадуке — и он, и Амелия перестают отличать свои фантазии от реальности.
                            </p>
                        </div>
                    ]
                },
                {
                    tag: "div",
                    class: "movie",
                    content: [
                        <img
                            src={globals.__UI_SERVER_ENDPOINT__ + "images/term-paper-from-the-other-world.jpg"}
                            alt="Ведьма из Блэр: Новая глава"
                            className="movie-img"
                            key="1"
                        />,
                        <div key="2" className="movie-description-wrap">
                            <h3 className="movie-title">Blair Witch 2016, Horror/Thriller</h3>
                            <p className="movie-description">
                                20 лет назад сестра Джеймса и двое её друзей пропали в лесу Блэк Хиллз, пытаясь раскрыть тайну так называемой ведьмы из Блэр. Джеймс с друзьями и видеокамерой отправляется в тот самый лес.
                            </p>
                        </div>
                    ]
                },
                {
                    tag: "div",
                    class: "movie",
                    content: [
                        <img
                            src={globals.__UI_SERVER_ENDPOINT__ + "images/limehouse-golem.jpg"}
                            alt="Голем"
                            className="movie-img"
                            key="2"
                        />,
                        <div key="1" className="movie-description-wrap">
                            <h3 className="movie-title">The Limehouse Golem 2016, Horror/Thriller</h3>
                            <p className="movie-description">
                                Викторианский Лондон, 1880. Опасный район Лаймхаус потрясает серия жестоких убийств. Напуганные до смерти жители полагают, что в этих чудовищных преступлениях повинен голем — древнее мифологическое существо, оживляемое при помощи черной магии. Расследовать загадочные убийства назначают опытного детектива, инспектора Килдэра.
                            </p>
                        </div>
                    ]
                },
                {
                    tag: "div",
                    class: "movie",
                    content: [
                        <img
                            src={globals.__UI_SERVER_ENDPOINT__ + "images/dagon.jpg"}
                            alt="Дагон 2001, Фэнтези"
                            className="movie-img"
                            key="1"
                        />,
                        <div key="2" className="movie-description-wrap">
                            <h3 className="movie-title">Dagon 2001, Horror/Fantasy</h3>
                            <p className="movie-description">
                                Выброшенные штормом на берег небольшого острова Пауль и Барбара нашли прибежище в рыбацкой деревушке. Когда Барбара неожиданно исчезает, Паулю приходится столкнуться с пугающей действительностью одинокого городка.
                            </p>
                        </div>
                    ]
                },
                {
                    tag: "div",
                    class: "movie",
                    content: [
                        <img
                            src={globals.__UI_SERVER_ENDPOINT__ + "images/jeepers-creepers3.jpg"}
                            alt="Джиперс Криперс"
                            className="movie-img"
                            key="2"
                        />,
                        <div key="1" className="movie-description-wrap">
                            <h3 className="movie-title">Jeepers Creepers 2001, Horror/Thriller</h3>
                            <p className="movie-description">
                                Жуткий незнакомец вторгается в жизнь брата и сестры. Стильный хоррор с одним из самых загадочных киномонстров
                                Если бы Дэрри и Триш знали, во что превратится их обычное путешествие домой на каникулы, то остались бы в колледже навсегда. Брат и сестра заметили его на безлюдной дороге рядом с жуткой, обветшалой церковью. Страшная фигура в длинном чёрном плаще и широкополой шляпе скидывала в подвал свертки, испачканные чем-то красным. После увиденного нужно было немедленно вдавить педаль газа взятой напрокат машины и умчаться от этого проклятого места как можно дальше. Но Дэрри и Триш допустили непоправимую, смертельную ошибку. Они решили вернуться и посмотреть: что же он прячет там, в подвале покосившейся церкви? Это безрассудное любопытство обернулось самым невообразимым кошмаром, который только можно себе представить…
                            </p>
                        </div>
                    ]
                },
                {
                    tag: "div",
                    class: "movie",
                    content: [
                        <img
                            src={globals.__UI_SERVER_ENDPOINT__ + "images/ghosts_house.jpg"}
                            alt="Дом призраков"
                            className="movie-img"
                            key="1"
                        />,
                        <div key="2" className="movie-description-wrap">
                            <h3 className="movie-title">Ghost House 2017, Horror/Thriller</h3>
                            <p className="movie-description">
                                Потревоженный злой дух преследует двух влюбленных туристов. Леденящий душу тайско-американский хоррор
                                Молодая пара отправляется в путешествие в Таиланд. В сельской местности они обнаруживают кладбище с находящимися на нём «домами призраков», где, по местным верованиями, духи обретают покой. Имевших неосторожность осквернить святыню влюблённых начинает преследовать жестокая сверхъестественная сила. Она погружает героев в пучину леденящего ужаса потустороннего мира, из которого нет выхода.
                            </p>
                        </div>
                    ]
                },
                {
                    tag: "div",
                    class: "movie",
                    content: [
                        <img
                            src={globals.__UI_SERVER_ENDPOINT__ + "images/spell2.jpg"}
                            alt="Заклятие"
                            className="movie-img"
                            key="2"
                        />,
                        <div key="1" className="movie-description-wrap">
                            <h3 className="movie-title">The Conjuring 2 2016, Horror/Thriller</h3>
                            <p className="movie-description">
                                Самые жуткие случаи из практики охотников за призраками. Начало хоррор-вселенной Джеймса Вана
                                История Эда и Лоррейн Уоррен, всемирно известных детективов, занимавшихся паранормальными расследованиями. К ним за помощью обратилась семья фермеров, которой жизни не давал злой дух. Вынужденные сражаться с могущественной демонической сущностью Уоррены сталкиваются с самым пугающим случаем в своей жизни.
                            </p>
                        </div>
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "",
            content: [
                {
                    tag: "h2",
                    class: "bloody-text warning",
                    content: "Warning!!!"
                },
                {
                    tag: "div",
                    class: "confirming",
                    content: [
                        <span key="1">
                            <span className="ending">
                                Поздравляю ты дошёл до конца этого сайта. Я надеюсь ты узнал нового о хоррорах и нашёл подходящий для просмотра))) Удачи тебе.<br />
                            </span>
                            <div className="dialog-wrap">
                                <span className="dialog">
                                    -Ты тоже это видишь ????<br />
                                    -Нет, а что?<br />
                                    -Появилась 5 страница!!!!<br />
                                    -я впервые такое вижу…..<br />
                                    -Зайдём на неё?<br />
                                    -Не думаю что это хорошая идея.<br />
                                    -Да ну ничего не слу…..<br />
                                    P.S.:<br />
                                    Одним разработчикам известно что там….<br />
                                </span>
                            </div>
                        </span>
                    ]
                }
            ]
        }
    ]
}

export default vars;
