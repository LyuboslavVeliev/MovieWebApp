import { logout } from '../services/userService.js';

function logoutView(ctx) {
    logout()
        .then(() => {
            ctx.page.redirect('/');
        })
}

export default logoutView;