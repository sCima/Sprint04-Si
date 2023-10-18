const pass = '123456';
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formPassword = document.querySelector('#password');

    if(pass === formPassword.value){
        window.location.href = 'dados.html';
    } else {
        alert('Você precisa de uma permissão para acessar a página')
        document.querySelector('#password').focus();
    }
    
})