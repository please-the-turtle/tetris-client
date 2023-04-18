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

export default function RegisterForm() {
    const form = useFormState({
        defaultValues: { login: "", password: "", passwordRepeat: "" },
    });

    form.useSubmit(() => {
        alert(JSON.stringify(form.values));
    })

    form.useValidate(() => {
        if (form.values.password !== form.values.passwordRepeat) {
            form.setError(form.names.passwordRepeat, "Password mismatch");
        }
    });

    return (
        <Form state={form} className="form">
            <div className="form__field">
                <FormLabel name={form.names.login}>Login:</FormLabel>
                <FormInput
                    name={form.names.login}
                    required
                    minLength="6"
                    maxLength="15"
                    placeholder="tetris-lover" />
            </div>
            <FormError
                name={form.names.login}
                className="form__field__error-message" />
            <div className="form__field">
                <FormLabel name={form.names.password}>Password:</FormLabel>
                <FormInput
                    name={form.names.password}
                    minLength="8"
                    maxLength="20"
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
            <div className="form__buttons-container">
                <Link to="/login">login now</Link>
                <FormSubmit className="form__buttons-container__button">Register</FormSubmit>
            </div>
        </Form>
    )
}