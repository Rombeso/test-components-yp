import Block from 'core/Block';

import './controlledInput.css';
import {validateForm, ValidateType} from "../../helpers/validateForm";

interface ControlledInputProps {
    onInput?: () => void;
    onFocus?: () => void;
    type?: 'text' | 'password' | 'email';
    placeholder?: string;
    value?: string;
    error?: string;
    name?: string;
    label?: string;
}

export class ControlledInput extends Block {
    constructor(
                    props
                : ControlledInputProps) {
        super({...props,
            onBlur: (e: FocusEvent) => {
            const inputEl = e.target as HTMLInputElement
                console.log(inputEl.value)

                const error = validateForm([{
                    type: ValidateType.Login, value: inputEl.value
                }])

                this.refs.errorRef.setProps({text: error})
            }
        });
    }

    protected render(): string {
        // language=hbs
        return `
            <div class="controlled-input">
                {{lable}}:
                {{{Input
                        type="{{type}}"
                        name="{{name}}"
                        placeholder="{{placeholder}}"
                        onInput=onInput
                        onFocus=onFocus
                        onBlur=onBlur
                }}}
                {{{Error ref="errorRef" text=error }}}
            </div>
        `
    }
}
