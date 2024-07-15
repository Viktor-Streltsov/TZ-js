function openModal() {
    const modal = document.getElementById('modal')
    const content = document.getElementById('content')


    document.getElementById('open-modal').addEventListener('click', function () {
        modal.style.display = 'block';
        content.style.display = 'none';
    });

    document.getElementById('close-modal').addEventListener('click', function () {
        modal.style.display = 'none';
        content.style.display = 'flex';
    });

    window.addEventListener('click', function (event) {
        if (event.target === body) {
            modal.style.display = 'none';
            content.style.display = 'flex';
        }
    });
}

openModal();

function postFormInfo() {
    document.getElementById('login-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        const formData = {
            username: username,
            password: password,
            remember: remember
        };

        console.log('Form Data:', formData);
    });
}

postFormInfo();

