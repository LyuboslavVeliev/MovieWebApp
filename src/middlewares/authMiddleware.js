import { isAuthenticated, isAdmin } from '../services/userService.js';

export const authMiddleware = (ctx, next) => {
    ctx.isAuthenticated = isAuthenticated();
    ctx.isAdmin = isAdmin();

    next();
}