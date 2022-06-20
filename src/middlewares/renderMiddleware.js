import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { navBarTemplate } from '../views/navBarView.js';


let layoutView = (ctx, templateResult) => html`
    <header>
        ${navBarTemplate(ctx)}
    </header>
    <main>
        ${templateResult()}
    </main>
`;

const rootElement = document.querySelector('#root');

let renderContext = (ctx, templateResult) => render(layoutView(ctx, templateResult), rootElement)

export const renderMiddleware = (ctx, next) => {

    ctx.render = renderContext.bind(null, ctx);

    next();
}