import useWindowSize from '../../hooks/useWindowSize';
import useToggle from '../../hooks/useToggle';
import './Header.scss';
import '../../_vars.scss';
import CloseIcon from './close.svg'
import MenuIcon from './menu.svg'
import NavLinks from '../NavLinks';
import Sidebar from '../Sidebar';
import { Button } from '@ariakit/react';

export default function Header() {
    const windowSize = useWindowSize();
    const sidebar = useToggle(false);

    return (
        <header>
                {(windowSize.width > 480) ? (
                    <NavLinks className='header__navigation' />) : (
                    <div>
                        <Button className='sidebar__button' onClick={sidebar.toggle}>
                            {sidebar.state ? <img src={CloseIcon} alt="Close menu" className='close-icon' />
                                : <img src={MenuIcon} alt="Open menu" className='menu-icon' />}

                        </Button>
                        <Sidebar toggle={sidebar}>
                            <NavLinks />
                        </Sidebar>
                    </div>
                )}
        </header>
    )
}