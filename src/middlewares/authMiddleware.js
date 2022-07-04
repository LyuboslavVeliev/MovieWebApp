import { isAuthenticated, isAdmin } from '../services/userService.js';

export const authMiddleware = (ctx, next) => {
    ctx.isAuthenticated = isAuthenticated();
    ctx.isAdmin = isAdmin();

    next();
}

export const isAdminMiddleware = (ctx, next) => {
    if (ctx.isAdmin === true) {
        next();
    } else {
        console.log('Access Denied');
    }
}