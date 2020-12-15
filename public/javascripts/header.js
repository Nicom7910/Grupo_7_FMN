const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //animar links
        navLinks.forEach((link, index) => {
            console.log(link)
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
    
        });
        //animacion del burger
        burger.classList.toggle('toggle')
    });
};

navSlide();