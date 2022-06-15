import loginTemplate from '../templates/login.js';
import { html, render } from '../../node_modules/lit-html/lit-html.js';

let rootElement = document.querySelector('#root');

function loginView() {
    return render(loginTemplate(), rootElement);
}

export default loginView;