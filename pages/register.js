let registerSection = document.querySelector('.register');

function showPage() {
    registerSection.classList.remove('hidden');
}

function hidePage() {
    registerSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
};