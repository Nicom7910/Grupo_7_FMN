var cantidad = document.getElementById('cantidadProd');

function aumentar(){
    
    cantidad.value = (Number(cantidad.value) + 1).toString();

}

function disminuir(){
    cantidad.value = (Number(cantidad.value) - 1).toString();
    
}