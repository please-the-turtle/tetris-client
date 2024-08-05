import { getUsername, saveUsername } from "../../services/userService";
import "./UsernameForm.scss"
import { useEffect } from "react";

export default function UsernameForm() {
    useEffect(() => {
        const form = document.forms.usernameForm;
        if (!form) {
            return;
        }

        form.elements.username.value = getUsername();
        form.addEventListener("submit", (event) => {
            console.log('on submit!');
            
            event.preventDefault();
            console.log(form.elements.username.value);
            
            saveUsername(form.elements.username.value)
        });
    }, [])

    return (
        <div className="username-form-container">
            <form name="usernameForm" className="username-form">
                <input
                    name="username"
                    placeholder="username"
                    className="username-form-input"
                    minLength={1}
                    maxLength={10}
                    required
                />
                <button type="submit" className="username-form-submit">
                    👌
                </button>
            </form>
        </div>
    )
}