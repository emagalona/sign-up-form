document.addEventListener('DOMContentLoaded', function () {
    const errMsg = document.querySelector('.error-msg');

    errMsg.forEach(element => {
        element.style.display = 'none';
    });
});