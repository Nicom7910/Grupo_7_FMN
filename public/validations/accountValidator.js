const nombre = document.getElementById("nombre");
const apellido = document.getElementById("lastname");
const email = document.getElementById("email");
const adress = document.getElementById("adress");
const country = document.getElementById("country");
const province = document.getElementById("province");
const city = document.getElementById("city");
const avatar = document.getElementById("avatar");
const form_Account = document.getElementById("form-account");
const actualizar =  document.getElementById("actualizar");


window.addEventListener("load", function(){
    actualizar.addEventListener("click", function(event){
        event.preventDefault();    
        if (nombre.value.length < 2 ){
            alert('El Nombre debe tener mas de 2 caracteres');
        }
        else if (apellido.value.length < 2 ){
            alert('El Apellido debe tener mas de 2 caracteres');
        }
        else if (email.value == ""){
            alert('Completa el campo Email');
        }
        else if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email.value)){ //Expresion Regular para caracteres Unicode
            alert('Ingrese un email valido');
        }
        else if (adress.value.length < 2 ){
            alert('La direccion debe tener mas de 2 caracteres');
        }
        else if (country.value.length < 2 ){
            alert('El Pais debe tener mas de 2 caracteres');
        }
        else if (province.value.length < 2 ){
            alert('La provincia debe tener mas de 2 caracteres');
        }
        else if (city.value.length < 2 ){
            alert('La ciudad debe tener mas de 2 caracteres');
        }
        /*else if (!(/\.(jpg|jpeg|png|gif)$/i).test(avatar.value) || (!(avatar.value == 'undefined')) ) {
            alert('Formato de imagen incorrecto. Debe ser .jpg/.jpeg/.png/.gif');
        }*/
        else{
            alert("Cambios realizados")
            form_Account.submit();
        }
    })
})