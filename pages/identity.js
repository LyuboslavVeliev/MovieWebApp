function saveAccessToken(token) {
    localStorage.setItem('auth_token', token);
}

export default {
    saveAccessToken,
    isAuthorized
};