import useWindowSize from '../../hooks/useWindowSize';
import useToggle from '../../hooks/useToggle';
import './Header.scss';
import '../../_vars.scss';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons';
import NavLinks from '../NavLinks';
import Sidebar from '../Sidebar';

export default function Header() {
    const windowSize = useWindowSize();
    const sidebar = useToggle(false);

    return (
        <header>
            <IconContext.Provider value={{ color: '#fff' }}>
                {(windowSize.width > 480) ? (
                        <NavLinks className='header__navigation' />) : (
                    <div>
                        <button className='sidebar__button' onClick={sidebar.toggle}>
                            {sidebar.state ? <IoIcons.IoMdClose /> : <IoIcons.IoMdMenu />}
                        </button>
                        <Sidebar toggle={sidebar}>
                            <NavLinks />
                        </Sidebar>
                    </div>
                )}
            </IconContext.Provider>
        </header>
    )
}