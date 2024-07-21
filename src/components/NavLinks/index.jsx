import { Link, useLocation } from 'react-router-dom';
import './NavLinks.scss';

export default function NavLinks({ className }) {
    const location = useLocation();
    const navLinksData = [
        {
            title: "Multiplayer",
            path: "/",
            cName: "navigation-item"
        },
        {
            title: "singleplayer",
            path: "/singleplayer",
            cName: "navigation-item"
        },
        {
            title: "statistics",
            path: "/statistics",
            cName: "navigation-item"
        },
    ];

    return (
        <nav className={className}>
            {navLinksData.map((item, index) => {
                return (
                    <Link key={index} 
                        to={item.path} 
                        className={(item.path === location.pathname) ? item.cName + ' bold' : item.cName}>
                        {item.title}
                    </Link>
                )
            })}
        </nav>)
};



