import { render } from '../../node_modules/lit-html/lit-html.js'

const rootElement = document.querySelector('#root');

let renderContext = (templateResult) => render(templateResult(), rootElement);

export const renderMiddleware = (ctx, next) => {

    ctx.render = renderContext;

    next();
}