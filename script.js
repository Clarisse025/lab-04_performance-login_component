const showPasswordCheckbox = document.querySelector('#showPassword');
const passwordInput = document.querySelector('#password');

showPasswordCheckbox.addEventListener('change', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});
