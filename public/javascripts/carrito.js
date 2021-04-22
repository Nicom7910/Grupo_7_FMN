
window.onload = function(){
    // let produductValue = document.querySelectorAll('.')
    
    let productQuantity = document.querySelectorAll('.cantidadProductos1x1')
    let productPrice = document.querySelectorAll('.product-price')
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let totalCart = document.querySelector('.total-cart');


    for (let i = 0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', e => {
            productQuantity[i].value = (parseInt(productQuantity[i].value) + 1)
            //imprimos el valor total del precio a pagar
            totalCart.innerHTML = parseInt(totalCart.innerHTML) + parseInt(productPrice[i].innerHTML);

        })
        decreaseButtons[i].addEventListener('click', e => {
            if( parseInt(productQuantity[i].value) > 1){
                productQuantity[i].value = (parseInt(productQuantity[i].value) - 1);
                totalCart.innerHTML = parseInt(totalCart.innerHTML) - parseInt(productPrice[i].innerHTML);
            }
        })

    }

}