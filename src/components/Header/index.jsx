import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <nav className='header__navigation'>
                <Link to='' className='header__navigation__item header__navigation__item_bold'>🏡 Home</Link>
                <Link to='friends' className='header__navigation__item'>friends</Link>
                <Link to='statistics' className='header__navigation__item'>statistics</Link>
            </nav>
        </header>
    )
}