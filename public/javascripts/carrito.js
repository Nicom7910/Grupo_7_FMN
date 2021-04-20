
window.onload = function(){
    // let productQuantity = document.querySelectorAll('.cantidadProductos1x1')
    // let produductValue = document.querySelectorAll('.')
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let totalCart = document.querySelector('.total-cart');
    console.log(productQuantity)
    console.log(decreaseButtons)
    console.log(increaseButtons)

    for (let i = 0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', e => {
            productQuantity[i].value = (parseInt(productQuantity[i].value) + 1)
            // totalCart.value = parseFloat(totalCart.value) + (parseInt(productQuantity[i].value)*1)
        })

        decreaseButtons[i].addEventListener('click', e => {
            productQuantity[i].value = (parseInt(productQuantity[i].value) - 1)
        })
    }

}