let navigation = document.querySelector("#navigation")
let backToTopButton = document.querySelector("#backToTopButton");

window.addEventListener('scroll', onScroll)

onScroll()

function onScroll(){
   showNavOnScroll()
   showBackToTopButtonOnScroll()

   activateMenuCurrentSection(home)
   activateMenuCurrentSection(services)
   activateMenuCurrentSection(about)
   activateMenuCurrentSection(contact)
}

function activateMenuCurrentSection(section){

    //altura da página dividida ao meio
    const tagertLine = scrollY + innerHeight / 2

    //verificar se a seção passou da linha
    //quais dados vou precisar?

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTagerline = tagertLine >= sectionTop

    //verificar se a base está abaixo da linha alvo

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTagertline = sectionEndsAt <= tagertLine

    //limites da seção

    const sectionBoundries = 
        sectionTopReachOrPassedTagerline && !sectionEndPassedTagertline

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundries){
        menuElement.classList.add('active')
    }
}

function showNavOnScroll(){
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove('scroll')
    };
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 400) {
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
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

