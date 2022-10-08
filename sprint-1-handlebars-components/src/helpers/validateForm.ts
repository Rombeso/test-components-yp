export enum ValidateType {
    Login = 'login',
    Password = 'password',
    // Email = 'email',
}

type ValidateRule = {
    type: ValidateType;
        value: string,
}

export function validateForm(rules: ValidateRule[]) {
    let errorMassage = '';
for (let i=0; i < rules.length; i++) {
const {type, value} = rules[i];

if (type === ValidateType.Login) {
    if (value.length === 0) {
        errorMassage = 'Login can not be empty'
        break;
    } else if (value.length < 4) {
        errorMassage = 'Login should contains more then 3 letters'
        break;
    }
} else if (type === ValidateType.Password) {
    if (value.length === 0) {
        errorMassage = 'Password can not be empty'
        break;
    }
}
}

return errorMassage
}