//SON 9 PRODUCTOS QUE SE MUESTRAN   

window.onload = function(){
    let span = document.querySelectorAll('.slide');
    let product = document.querySelectorAll('.product');
    let slide = 290;
    var clickCounter = 0;
    //maxClick corresponde a la cantidad máxima de veces que el usario va a poder pasar de producto en el slider
    let maxClick = product.length
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        maxClick = maxClick-1
    }else if(window.innerWidth > 1440) {
        maxClick = maxClick-3
    }

    span[1].addEventListener('click', e => {
        clickCounter++
        for(let i of product){
            if (clickCounter<maxClick) {
                i.style.left = `-${slide*clickCounter}px`
            }else{
                clickCounter = maxClick
            }
        }
    })

    span[0].addEventListener('click', e => {
        clickCounter--;
        for(let i of product){
            if ( clickCounter < maxClick && clickCounter >= 0 ) {
                i.style.left = `-${slide*clickCounter}px`
            }else{
                clickCounter = 0
            }
        }
    })
}