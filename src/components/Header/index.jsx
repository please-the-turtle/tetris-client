import React, { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import './Header.scss';
import '../../_vars.scss';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons';

export default function Header() {
    const windowSize = useWindowSize();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

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

    const showNavLinks = () => navLinksData.map((item, index) => {
        return (
            <Link key={index} to={item.path} className={item.cName}>
                <span>{item.title}</span>
            </Link>
        )
    });

    return (
        <header>
            <IconContext.Provider value={{ color: '#fff' }}>
                {(windowSize.width > 480) ? (
                    <nav className='header__navigation'>
                        {showNavLinks()}
                    </nav>) : (
                    <div className=''>
                        <button className='sidebar__button' onClick={showSidebar}>
                            {sidebar ? <IoIcons.IoMdClose /> : <IoIcons.IoMdMenu />}
                        </button>
                        <nav className={sidebar ? 'sidebar active' : 'sidebar'}
                            onClick={showSidebar}>
                            {showNavLinks()}
                        </nav>
                    </div>
                )}
            </IconContext.Provider>
        </header>
    )
}