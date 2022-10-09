import Block from 'core/Block';
import {validateForm, ValidateType} from "helpers/validateForm";


export class LoginPage extends Block {
    constructor() {
        super();
        this.setProps({
            error: '',
            loginValue: '',
            passwordValue: '',
            onInput: (e) => {
                const inputEl = e.target as HTMLInputElement
                const errorMassage = validateForm(
                    [{type: ValidateType.Login, value: inputEl.value}]
                )

                this.refs.loginInputRef.refs.errorRef.setProps({text: errorMassage});
            },
            onFocus: () => console.log('focus'),
            onBlur: () => console.log('blur'),
            onSubmit: () => {
                const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
                const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;

                const loginRef = this.refs.loginInpur

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

        // console.log(this.refs)

        // language=hbs
        return `
            <div class="screen screen_theme_full">
                <div class="screen__content">
                    {{{ControlledInput
                            ref="loginInputRef"
                            onInput=onInput
                            onFocus=onFocus
                            type="text"
                            name="login"
                            placeholder="Your login"
                            label="Login"
                    }}}
                    {{#if error}}{{error}}{{/if}}
                    {{{Button text="Login" onClick=onSubmit}}}
                </div>
            </div>
        `;
    }
}

// {{{ControlledInput
//     type="text"
//     name="login"
//     placeholder="Your login"
//     value="${this.props.loginValue}"
//     label="Login"
//     ref="loginInpur"
//
// }}}
// {{{ControlledInput
//     type="password"
//     name="password"
//     placeholder="Your password"
//     value="${this.props.passwordValue}"
//     label="Password"
//     ref="passwordInpur"
// }}}