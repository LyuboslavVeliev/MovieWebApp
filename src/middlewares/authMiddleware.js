import { isAuthenticated } from '../services/userService.js';

export const authMiddleware = (ctx, next) => {
    ctx.isAuthenticated = isAuthenticated();

    next();
}