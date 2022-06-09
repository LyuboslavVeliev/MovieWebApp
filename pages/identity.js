function saveAccessToken(token) {
    localStorage.setItem('auth_token', token);
}

function isAuthorized() {
    let authTokenValue = localStorage.getItem('auth_token');

    if (authTokenValue != null && authTokenValue != 'undefined') {
        return true;
    } else {
        return false;
    }
}

export default {
    saveAccessToken,
    isAuthorized
};