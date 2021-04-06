let submit = document.getElementById('submit');
submit.disabled = true;

window.onload = function(){

    submit.disabled = false;
    
    let form = document.getElementById('form-product')
    let productName = document.getElementById('productName');
    let stock = document.getElementById('number'); 
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let manufacturer = document.getElementById('manufacturer');
    let category = document.getElementById('category');
    let image = document.getElementById('fileImg');

    //caracateres restantes
    let nameLength = document.getElementById('productName-length');
    let descriptionLength = document.getElementById('description-length');

    nameLength.innerText = (100 - productName.value.length);
    descriptionLength.innerText = (2000 - description.value.length);

    //mostramos los caracteres restantes del titulo y la descripcion
    productName.addEventListener('keydown', (e) => {
        nameLength.innerHTML = 100 - productName.value.length
        if(productName.value.length >= 100 && e.key != 'Backspace'){
            e.preventDefault()
        }
    })
    description.addEventListener('keydown', (e) => {
        descriptionLength.innerHTML = 2000 - description.value.length
        if(description.value.length >= 2000 && e.key != 'Backspace'){
            e.preventDefault()
        }
    })

    //si el admin cambia la foto, la mostramos en pantalla
    image.addEventListener('change', (e) => {
        let output = document.getElementById('output');
        output.src = URL.createObjectURL(e.target.files[0])
    })

    form.addEventListener('submit', e => {
        let errors = 0
        //los errores tienen una clase llamada error
        let classError = document.querySelectorAll('.error');
        //si ya existe un error, lo borramos asi no se van acumulando en pantalla
        for (let i = 0; i < classError.length; i++) {
            classError[i].remove()
        }
        //checkeamos los caracteres del titulo y la descripcion
        if (productName.value.length < 10) {
            errors++;
            productName.insertAdjacentHTML("beforebegin", `<p class="error">Son 10 caracteres como mínimo</p>`);
        }

        if (description.value.length < 150) {
            errors++;
            description.insertAdjacentHTML("beforebegin", `<p class="error">Tenés que completar un poco más la descripción</p>`)
        }

        //validamos stock
        switch(stock.value){
            case '':
                errors++
                stock.insertAdjacentHTML("beforebegin", `<p class="error">Tenés que ingresar un stock</p>`)
                break;
            case '0':
                errors++
                stock.insertAdjacentHTML("beforebegin", `<p class="error">El stock no puede ser igual a 0</p>`)
                break;
        }

        //validacion del precio
        if ((isNaN(parseInt(price.value)))) {
            errors++
            price.insertAdjacentHTML("beforebegin", `<p class="error">Tenés que ingresar un precio</p>`)
        }else if (parseInt(price.value) <= 0) {
            errors++
            price.insertAdjacentHTML("beforebegin", `<p class="error">El precio no puede ser negativo o igual a 0</p>`)  
        }

        if (errors != 0) {
            e.preventDefault()
        }
        if (errors == 0) {
            alert('Se actualizó el producto')
        }
    })
}