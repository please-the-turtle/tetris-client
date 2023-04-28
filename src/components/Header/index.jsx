import useWindowSize from '../../hooks/useWindowSize';
import useToggle from '../../hooks/useToggle';
import './Header.scss';
import '../../_vars.scss';
import { IoClose, IoMenu } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import NavLinks from '../NavLinks';
import Sidebar from '../Sidebar';
import LogoutButton from '../LogoutButton';
import { Button } from 'ariakit';

export default function Header() {
    const windowSize = useWindowSize();
    const sidebar = useToggle(false);

    return (
        <header>
            <IconContext.Provider value={{ color: '#fff' }}>
                {(windowSize.width > 480) ? (
                    <NavLinks className='header__navigation' />) : (
                    <div>
                        <Button className='sidebar__button' onClick={sidebar.toggle}>
                            {sidebar.state ? <IoClose /> : <IoMenu />}
                        </Button>
                        <Sidebar toggle={sidebar}>
                            <NavLinks />
                        </Sidebar>
                    </div>
                )}
                <LogoutButton />
            </IconContext.Provider>
        </header>
    )
}