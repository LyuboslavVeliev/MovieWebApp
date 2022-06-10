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

function adjustNavBarIfAuthorized() {
    if (isAuthorized()) {
        let navBarLinks = document.querySelectorAll('.nav-link');

        for (const link of navBarLinks) {
            if (link.getAttribute('data-link') == 'login' || link.getAttribute('data-link') == 'register') {
                link.classList.add('hidden');
            } else if(link.getAttribute('data-link') == 'logout') {
                link.classList.remove('hidden');
            }
        }
    }
}

function adjustNavBarAfterLogout() {
    if (!isAuthorized()) {
        let navBarLinks = document.querySelectorAll('.nav-link');

        for (const link of navBarLinks) {
            if (link.getAttribute('data-link') == 'login' || link.getAttribute('data-link') == 'register') {
                link.classList.remove('hidden');
            } else if(link.getAttribute('data-link') == 'logout') {
                link.classList.add('hidden');
            }
        }
    }
}

export default {
    saveAccessToken,
    isAuthorized,
    adjustNavBarIfAuthorized,
    adjustNavBarAfterLogout
};