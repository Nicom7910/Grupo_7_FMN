
/*PARA QUE EL USARIO TENGA QUE APRETAR Y PODER DESPLEGAR LOS FILTROS*/ 

const filter =  () =>{
    const filtrosDiv = document.querySelector(".filtros");
    const todosFiltros = document.getElementById('todos-filtros');
    
    filtrosDiv.addEventListener('click', () => {
        if ( todosFiltros.style.display ) {
            todosFiltros.style.display = ''
        }else {
            todosFiltros.style.display = 'block'
        }
    })
    };

filter();


