import { Link } from 'react-router-dom';
import './Header.scss';

export default function NavLinks() {
    const navLinksData = [
        {
            title: "Home",
            path: "/",
            cName: "header__navigation__item header__navigation__item_bold"
        },
        {
            title: "friends",
            path: "friends",
            cName: "header__navigation__item"
        },
        {
            title: "statistics",
            path: "statistics",
            cName: "header__navigation__item"
        },
        {
            title: "game",
            path: "game",
            cName: "header__navigation__item"
        },
    ];

    return navLinksData.map((item, index) => {
        return (
            <Link key={index} to={item.path} className={item.cName}>
                <span>{item.title}</span>
            </Link>
        )
    })
};



