import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { navBarTemplate } from '../views/navBarView.js';


let layoutView = (templateResult) => html`
    <header>
        ${navBarTemplate()}
    </header>
    <main>
        ${templateResult()}
    </main>
`;

const rootElement = document.querySelector('#root');

let renderContext = (templateResult) => render(layoutView(templateResult), rootElement)

export const renderMiddleware = (ctx, next) => {

    ctx.render = renderContext;

    next();
}