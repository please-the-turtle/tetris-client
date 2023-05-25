import { IoExitOutline } from 'react-icons/io5';
import { Button } from "ariakit";
import "./LogoutButton.scss"
import { useStore } from "store/useStore";

export default function LogoutButton() {
    const logout = useStore((state) => state.logout);

    return (
        <Button className='button' onClick={logout}>
            <IoExitOutline />
        </Button>
    );
}