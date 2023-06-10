import { IoPersonOutline } from 'react-icons/io5';
import { Menu, MenuButton, MenuItem, useMenuState } from "ariakit";
import "./ProfileButton.scss"
import { useStore } from "store/useStore";
import { useNavigate } from 'react-router';

export default function ProfileButton() {
    const menu = useMenuState({placement: "bottom-end"});
    const navigate = useNavigate();
    const logout = useStore((state) => state.logout);
    const goToProfile = () => navigate('/profile');

    return (
        <>
            <MenuButton className="button" state={menu}>
                <IoPersonOutline />
            </MenuButton>
            <Menu className="menu" state={menu}>
                <MenuItem className="menu-item" onClick={goToProfile}>
                    Profile
                </MenuItem>
                <MenuItem className="menu-item" onClick={logout}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}