window.onload =function(){
    let update = document.querySelector('.update');
    let products = document.querySelector('.products');
    let container = document.querySelector('.container')

    update.addEventListener('click', (e)=>{
        console.log(e)
        update.style.visibility = 'hidden';
        products.style.display = 'block';
        console.log(container.style)
        container.style.height = '30vh'
    })
}