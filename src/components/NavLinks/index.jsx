import { Link } from 'react-router-dom';
import './NavLinks.scss';

export default function NavLinks({ className }) {
    const navLinksData = [
        {
            title: "Home",
            path: "/",
            cName: "navigation-item bold"
        },
        {
            title: "singleplayer",
            path: "singleplayer",
            cName: "navigation-item"
        },
        {
            title: "leaderboard",
            path: "leaderboard",
            cName: "navigation-item"
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



