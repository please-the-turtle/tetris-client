import {
    Form,
    FormError,
    FormInput,
    FormLabel,
    FormSubmit,
    useFormState,
} from "ariakit/form";
import "./Form.scss"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../index";

export default function RegisterForm() {
    const form = useFormState({
        defaultValues: { username: "", password: "", passwordRepeat: "" },
    });
    const [registerErrorMessage, setRegisterErrorMessage] = useState(undefined);
    const { store } = useContext(Context);
    const navigate = useNavigate();

    form.useSubmit(() => {
        store.register(form.values.username, form.values.password)
            .then(() => navigate("/login"))
            .catch(error => {
                setRegisterErrorMessage(error.response.data.message);
            });
    })

    form.useValidate(() => {
        if (form.values.password !== form.values.passwordRepeat) {
            form.setError(form.names.passwordRepeat, "Password mismatch");
        }
    });

    return (
        <Form state={form} className="form">
            <div className="form__field">
                <FormLabel name={form.names.username}>Username:</FormLabel>
                <FormInput
                    name={form.names.username}
                    required
                    minLength="2"
                    maxLength="20"
                    placeholder="tetris-lover" />
            </div>
            <FormError
                name={form.names.username}
                className="form__field__error-message" />
            <div className="form__field">
                <FormLabel name={form.names.password}>Password:</FormLabel>
                <FormInput
                    name={form.names.password}
                    minLength="8"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).*$"
                    required type='password'
                    placeholder="qwer1234" />
            </div>
            <FormError
                name={form.names.password}
                className="form__field__error-message" />
            <div className="form__field">
                <FormLabel name={form.names.passwordRepeat}>Repeat password:</FormLabel>
                <FormInput
                    name={form.names.passwordRepeat}
                    required
                    type='password'
                    placeholder="qwer1234"
                />
            </div>
            <FormError
                name={form.names.passwordRepeat}
                className="form__field__error-message" />
            {registerErrorMessage && <div className="form__error-message">
                {registerErrorMessage}
            </div>}
            <div className="form__buttons-container">
                <Link to="/login">login now</Link>
                <FormSubmit className="form__buttons-container__button">Register</FormSubmit>
            </div>
        </Form>
    )
}