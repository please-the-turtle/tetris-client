import { Link } from 'react-router-dom';
import './NavLinks.scss';

export default function NavLinks({className}) {
    const navLinksData = [
        {
            title: "Home",
            path: "/",
            cName: "navigation__item navigation__item_bold"
        },
        {
            title: "friends",
            path: "friends",
            cName: "navigation__item"
        },
        {
            title: "statistics",
            path: "statistics",
            cName: "navigation__item"
        },
        {
            title: "game",
            path: "game",
            cName: "navigation__item"
        },
    ];

    return (
        <nav className={className}>
            {navLinksData.map((item, index) => {
                return (
                    <Link key={index} to={item.path} className={item.cName}>
                        {item.title}
                    </Link>
                )
            })}
        </nav>)
};



