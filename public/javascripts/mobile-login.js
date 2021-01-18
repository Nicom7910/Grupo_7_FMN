const formChanger = () => {
    const login = document.querySelector('#login');
    const register = document.querySelector('#register');
    const change = document.querySelector('small')
    const h1 = document.querySelector('h1')
    
    change.addEventListener('click', () => {
        if (login.style.display == '' || login.style.display == 'flex') {
            login.style.display = 'none';
            register.style.display = 'flex';
            h1.innerHTML = 'Registrate';
            change.innerHTML = '¿Ya tenés una cuenta? Logueate!';
        }else {
            register.style.display = 'none';
            login.style.display = 'flex';
            h1.innerHTML = 'Login';
            change.innerHTML = '¿Todavía no tenés una cuenta? Registrate';
        }
        
    })
}

const inputBorder = () => {
    const inputs = document.querySelectorAll('input');
    const div = document.querySelectorAll('form div');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus' , () => {
            inputs[i].parentElement.style.border = '1px solid black'
        })
        
    }
}

formChanger();


inputBorder();