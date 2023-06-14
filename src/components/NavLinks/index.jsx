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
            title: "singleplayer",
            path: "singleplayer",
            cName: "navigation__item"
        },
        {
            title: "leaderboard",
            path: "leaderboard",
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



