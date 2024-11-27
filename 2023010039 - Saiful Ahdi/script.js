// MENU POP UP
// Get elements
const loginPopup = document.getElementById('loginPopup');
const registerPopup = document.getElementById('registerPopup');
const openLoginForm = document.getElementById('openLoginForm');
const openRegisterForm = document.getElementById('openRegisterForm');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');

// Buka Login
openLoginForm.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
});

// Buka Register Form
openRegisterForm.addEventListener('click', () => {
    registerPopup.style.display = 'flex';
});

// Menutup Konten Jika Klik diluar Konten
window.addEventListener('click', (e) => {
    if (e.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
    if (e.target === registerPopup) {
        registerPopup.style.display = 'none';
    }
});
