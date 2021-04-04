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


window.onload= function(){}

// Formulario de Registro
    form_register.addEventListener("submit", function(event){
        event.preventDefault();
        let errors = 0
        //los errores tienen una clase llamada error
        let classError = document.querySelectorAll('.error');
        //si ya existe un error, lo borramos asi no se van acumulando en pantalla
        for (let i = 0; i < classError.length; i++) {
            classError[i].remove()
        }
        if (nombreR.value == "" || nombreR.value.length < 2){
            errors++
            nombreR.insertAdjacentHTML("afterend", `<div class="error" style="color: red; font-size: 10px;">Tenés que ingresar un minimo de 3 caracteres</div>`)
            //alert('El campo Nombre necesita minimo 3 caracteres');
        }
        if(emailR.value == ""){
            errors++
            emailR.insertAdjacentHTML("afterend", `<div class="error" style="color: red; font-size: 10px;">Tenés que ingresar un mail</div>`)
            //alert('Completa el campo Email');
        }
        else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(emailR.value)){ //Expresion Regular para caracteres Unicode
            errors++
            emailR.insertAdjacentHTML("afterend", `<div class="error" style="color: red; font-size: 10px;">Tenés que ingresar mail valido</div>`)
            //alert('Ingrese un email valido');
        }
        if (!(/\.(jpg|jpeg|png|gif)$/i).test(avatarR.value) ) {
            errors++
            avatarR.insertAdjacentHTML("afterend", `<div class="error" style="color: red; font-size: 10px;">Formato de imagen incorrecto. Debe ser .jpg/.jpeg/.png/.gif</div>`)
            //alert('Formato de imagen incorrecto. Debe ser .jpg/.jpeg/.png/.gif');
        }
        if (contraseñaR.value.length < 6){
            errors++
            contraseñaR.insertAdjacentHTML("afterend", `<div class="error" style="color: red; font-size: 10px;">Contraseña poco segura, que posea mas de 6 caracteres</div>`)
            //alert('La Contraseña debe tener mas de 8 caracteres');
        }
        if (errors==0){
            form_register.submit();
        }

    })

// Formulario de Login
    form_login.addEventListener("submit", function(event){
        event.preventDefault();
        let errors = 0
        //los errores tienen una clase llamada error
        let classError = document.querySelectorAll('.error');
        //si ya existe un error, lo borramos asi no se van acumulando en pantalla
        for (let i = 0; i < classError.length; i++) {
            classError[i].remove()
        }
        if(emailL.value == ""){
            errors++
            emailL.insertAdjacentHTML("afterend", `<div class="error" style="color: red; font-size: 10px;">Tenés que ingresar un mail</div>`)
            //alert('Completa el campo Email');
        }
        else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(emailL.value)){ //Expresion Regular para caracteres Unicode
            errors++
            emailL.insertAdjacentHTML("afterend", `<div class="error" style="color: red; font-size: 10px;">Tenés que ingresar mail valido</div>`)
            //alert('Ingrese un email valido');
        }
        if (contraseñaL.value.length < 8){
            errors++
            contraseñaL.insertAdjacentHTML("afterend", `<div class="error" style="color: red; font-size: 10px;">Tenés que ingresar una contraseña</div>`)
            //alert('La Contraseña debe tener mas de 8 caracteres');
        }
        if (errors==0){
            form_login.submit()
        }

    })