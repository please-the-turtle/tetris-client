import { IoExitOutline } from 'react-icons/io5';
import { Button } from "ariakit";
import { useContext } from "react";
import { Context } from "../../index";
import "./LogoutButton.scss"

export default function LogoutButton() {
    const { store } = useContext(Context);

    return (
        <Button className='button' onClick={store.logout}>
            <IoExitOutline />
        </Button>
    );
}