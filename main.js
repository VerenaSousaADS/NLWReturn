function onScroll(){
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove('scroll')
    };
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}


// Biblioteca de terceiros (scrollrevealjs.org)

ScrollReveal({
   origin: 'top',
   distance: '30px',
   duration: 700,
}).reveal(`#home, 
#home .mulher, 
#home .stats,
 #services,
 #services header,
 #services .card,
 #about,
 about header,
 about .content`);

