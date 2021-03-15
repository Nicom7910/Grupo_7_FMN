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

// Formulario de Registro
window.addEventListener("load", function(){
    registrar.addEventListener("click", function(event){
        event.preventDefault();    
        if (nombreR.value == ""){
            alert('Completa el campo Nombre');
        }
        else if (emailR.value == ""){
            alert('Completa el campo Email');
        }
        else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(emailR.value)){ //Expresion Regular para caracteres Unicode
            alert('Ingrese un email valido');
        }
        else if (contraseñaR.value ==""){
            alert('Complete el campo Contraseña');
        }
        else if (!(/\.(jpg|jpeg|png|gif)$/i).test(avatarR.value) ) {
            alert('Formato de imagen incorrecto. Debe ser .jpg/.jpeg/.png/.gif');
        }
        else{
            form_register.submit();
        }
    })
})

// Formulario de Login
window.addEventListener("load", function(){
    loguear.addEventListener("click", function(event){
        event.preventDefault();    
        if(emailL.value == ""){
            alert('Completa el campo Email');
        }
        else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(emailL.value)){ //Expresion Regular para caracteres Unicode
            alert('Ingrese un email valido');
        }
        else if (contraseñaL.value ==""){
            alert('Complete el campo Contraseña');
        }
        else{
            form_login.submit();
        }
    })
})