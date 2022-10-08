import Block from '../../core/Block';
import {validateForm, ValidateType} from "../../helpers/validateForm";

export class LoginPage extends Block {
    constructor() {
        super();
        this.setProps({
            error: '',
            loginValue: '',
            passwordValue: '',
            onSubmit: () => {
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

                const errorMassage = validateForm(
                    [{type: ValidateType.Login, value: loginEl.value},
                        {type: ValidateType.Password, value: passwordEl.value}]
                )
                if(errorMassage) {
                    this.setProps({
                        error: errorMassage,
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value,
                    })
                } else {
                    this.setProps({
                        error: '',
                        loginValue: loginEl.value,
                        passwordValue: passwordEl.value,
                    })
                    console.log(loginEl.value, passwordEl.value)
                }
                //console.log(errorMassage)
               //
            }
        })
    }

    render() {
        // language=hbs
        return `
            <div class="screen screen_theme_full">
                <div class="screen__content">
                    {{{Input
                            type="text"
                            name="login"
                            placeholder="Your login"
                            value="${this.props.loginValue}"
                            label="Login"

                    }}}
                    {{{Input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            value="${this.props.passwordValue}"
                            label="Password"
                    }}}
                    {{#if error}}{{error}}{{/if}}
                    {{{Button text="Login" onClick=onSubmit}}}
                </div>
            </div>
        `;
    }
}