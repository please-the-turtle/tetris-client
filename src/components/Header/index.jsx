import React, { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import './Header.scss';
import '../../_vars.scss';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons';
import NavLinks from './NavLinks';

export default function Header() {
    const windowSize = useWindowSize();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <header>
            <IconContext.Provider value={{ color: '#fff' }}>
                {(windowSize.width > 480) ? (
                    <nav className='header__navigation'>
                        <NavLinks />
                    </nav>) : (
                    <div className=''>
                        <button className='sidebar__button' onClick={showSidebar}>
                            {sidebar ? <IoIcons.IoMdClose /> : <IoIcons.IoMdMenu />}
                        </button>
                        <nav className={sidebar ? 'sidebar active' : 'sidebar'}
                            onClick={showSidebar}>
                            <NavLinks />
                        </nav>
                    </div>
                )}
            </IconContext.Provider>
        </header>
    )
}