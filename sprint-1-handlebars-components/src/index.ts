import LoginPage from "./pages/login";


require("babel-core/register");
import { Block, renderDOM, registerComponent }  from './core';

import './app.css';

import Button from './components/button';
import Link from './components/link';
import Input from './components/input';
import Layout from './components/layout';
import ErrorComponent from './components/error';
import {OnboardingPage} from "./pages/onboarding/onboarding";
import {LoginPage} from "./pages/login/login";
import ControlledInput from "./components/controlledInput";

registerComponent(Button);
registerComponent(Link);
registerComponent(Input);
registerComponent(Layout);
registerComponent(ErrorComponent);
registerComponent(ControlledInput);


// TODO: // Добавить MyComponent

document.addEventListener("DOMContentLoaded", () => {
    renderDOM( new LoginPage());
});