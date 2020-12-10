let filtrosDiv = document.querySelector(".filtros");

let todosFiltros = document.getElementById('todos-filtros');


filtrosDiv.addEventListener('click', () => {
    todosFiltros.style.display !== 'none' ? todosFiltros.style.display = 'none' : todosFiltros.style.display = 'block' ;
})