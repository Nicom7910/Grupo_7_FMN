let filtrosDiv = document.querySelector(".filtros");
let todosFiltros = document.getElementById('todos-filtros');

/*PARA QUE EL USARIO TENGA QUE APRETAR Y PODER DESPLEGAR LOS FILTROS*/ 

function filtrarBusqueda(){
filtrosDiv.addEventListener('click', () => {
    if ( todosFiltros.style.display !== 'none' ) {
        todosFiltros.style.display = 'none'
    }else {
        todosFiltros.style.display = 'block'
    }
})
};

/*=====
APLICAMOS ESTA FUNCION SOLO SI LA PANTALLA ES MENOR A 1440px 
=====*/ 
screen.width > 1440 ? todosFiltros.style.display = 'block' : filtrarBusqueda();