import {
    Form,
    FormError,
    FormInput,
    FormLabel,
    FormSubmit,
    useFormState,
} from "ariakit/form";
import "./Form.scss"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

function LoginForm() {
    const form = useFormState({ defaultValues: { username: "", password: "" } });
    const [authErrorMessage, setAuthErrorMessage] = useState(undefined);
    const { store } = useContext(Context);

    form.useSubmit(() => {
        store.login(form.values.username, form.values.password)
            .catch(error => {
                setAuthErrorMessage(error.response.data.message);
            });
    })

    return (
        <Form state={form} className="form">
            <h1>{store.auth}</h1>
            <div>
                <div className="form__field">
                    <FormLabel name={form.names.username}>Username:</FormLabel>
                    <FormInput
                        name={form.names.username}
                        required
                        maxLength="20"
                        placeholder="tetris-lover" />
                </div>
                <FormError
                    name={form.names.username}
                    className="form__field__error-message" />
            </div>
            <div>
                <div className="form__field">
                    <FormLabel name={form.names.password}>Password:</FormLabel>
                    <FormInput
                        name={form.names.password}
                        required
                        type='password'
                        placeholder="qwer1234" />
                </div>
                <FormError
                    name={form.names.password}
                    className="form__field__error-message" />
            </div>
            {authErrorMessage && <div className="form__error-message">
                {authErrorMessage}
            </div>}
            <div className="form__buttons-container">
                <Link to="/register">register new</Link>
                <FormSubmit className="form__buttons-container__button">Submit</FormSubmit>
            </div>
        </Form>
    )
}

export default observer(LoginForm);