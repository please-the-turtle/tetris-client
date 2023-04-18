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

export default function LoginForm() {
    const form = useFormState({ defaultValues: { login: "", password: "" } });

    form.useSubmit(() => {
        alert(JSON.stringify(form.values));
    })

    return (
        <Form state={form} className="form">
            <div>
                <div className="form__field">
                    <FormLabel name={form.names.login}>Login:</FormLabel>
                    <FormInput
                        name={form.names.login}
                        required
                        maxLength="20"
                        placeholder="tetris-lover" />
                </div>
                <FormError
                    name={form.names.login}
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
            <div className="form__buttons-container">
                <Link to="/register">register new</Link>
                <FormSubmit className="form__buttons-container__button">Submit</FormSubmit>
            </div>
        </Form>
    )
}