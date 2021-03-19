const registrar = document.getElementById("registrar");
const nombreR = document.getElementById("nombre");
const emailR = document.getElementById("email");
const avatarR = document.getElementById("avatar");
const contraseñaR = document.getElementById("password");
const form_register = document.getElementById("form-register");
const loguear = document.getElementById("login");
const emailL = document.getElementById("emailL");
const contraseñaL = document.getElementById("contraseña");
const form_login = document.getElementById("form-login");
const error = document.getElementsByClassName('error');
const mostrarError = document.querySelector('div.error');

window.onload= function(){}

// Formulario de Registro

let mensajesError = [];
registrar.addEventListener("click", function(event){
    //event.preventDefault();
    if (nombreR.value == "" || nombreR.value.length < 2){
        //mensajesError.push('Completa el campo Nombre');
        //mostrarError.innerHTML = mensajesError;
        alert('El campo Nombre necesita minimo 3 caracteres');
    }
    else if (emailR.value == ""){
        //mensajesError.push('Completa el campo Email')
        //mostrarError.innerHTML = mensajesError;
        alert('Completa el campo Email');
    }
    else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(emailR.value)){ //Expresion Regular para caracteres Unicode
        //mensajesError.push('Ingrese un email valido');
        //mostrarError.innerHTML = mensajesError;
        alert('Ingrese un email valido');
    }
    else if (contraseñaR.value.length < 8 ){
        //mensajesError.push('La Contraseña debe tener mas de 8 caracteres');
        //mostrarError.innerHTML = mensajesError;
        alert('La Contraseña debe tener mas de 8 caracteres');
    }
    else if (!(/\.(jpg|jpeg|png|gif)$/i).test(avatarR.value) ) {
        //mensajesError.push('Formato de imagen incorrecto. Debe ser .jpg/.jpeg/.png/.gif');
        //mostrarError.innerHTML = mensajesError;
        alert('Formato de imagen incorrecto. Debe ser .jpg/.jpeg/.png/.gif');
    }
    else if (mensajesError.length !=0){
        //console.log('Errrroooooorrrr')
        event.preventDefault();
    }
    else{
        form_register.submit();
    }
})

// Formulario de Login
window.addEventListener("load", function(){
    loguear.addEventListener("click", function(event){
        event.preventDefault();    
        if(emailL.value == ""){
            emailL.insertAdjacentHTML("afterend", `<p class="error">Tenés que ingresar un precio</p>`)
            alert('Completa el campo Email');
        }
        else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(emailL.value)){ //Expresion Regular para caracteres Unicode
            alert('Ingrese un email valido');
        }
        else if (contraseñaL.value.length < 8){
            alert('La Contraseña debe tener mas de 8 caracteres');
        }
        else{
            form_login.submit();
        }
    })
})
