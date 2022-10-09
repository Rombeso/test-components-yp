import Block from '../../core/Block';

import './input.css';

interface InputProps {
  onChange?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  name?: string;
  label?: string;
}

export class Input extends Block {
  constructor({onChange = () => {}, type = 'text', error, placeholder, value, name, label}: InputProps) {
    super({name, label, type, placeholder, value, error, events: {input: onChange}});
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="input">
        {{lable}}:
        <input name="{{name}}" class="input__input" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}">
        <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
      </div>
    `
  }
}
