import { html, render } from '../node_modules/lit-html/lit-html.js';
import navbarTemplate from './templates/navBar.js';
import loginTemplate from './templates/login.js';

function mainTemplate() {
    let rootElement = document.querySelector('#root');

    let resultTemplate = () => html`${navbarTemplate()} ${loginTemplate()}`;

    render(resultTemplate(), rootElement);
}

export default mainTemplate;