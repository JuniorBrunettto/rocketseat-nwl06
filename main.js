/* abre e fecha o menu quando clickar no icone: 3traços e x */
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
    element.addEventListener("click", function() {
        nav.classList.toggle("show")
    })
}

/* quando clickar em um item do menu, esconder o menu */
const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
    link.addEventListener("click" , function(){
        nav.classList.remove("show")
    })
}

/* mudar o header da pagina quando der scroll */

function changeHeaderWhenScroll() {
    const header = document.querySelector("#header")
    const navHeigth = header.offsetHeight

    if(window.scrollY >= navHeigth){
        // scroll é maior que a altura do header
        header.classList.add("scroll")
    } else {
        // scroll menor que a altura do header
        header.classList.remove("scroll")
    }
}



/* testimonials slider swiper 

const swiper = new Swiper('.swiper', {
    slidesPerView: 1
    pagination: {
        el: '.swiper-pagination',
      },
    mausewheel: true,
    keyboard: true,
    
  });
*/

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },


    mausewheel: true,
    keyboard: true

  
       
  })

  /*  ScrollReveal mostrar elementos quando der review na tela */
const scrollReveal = ScrollReveal ({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: true
});

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .social
 `, {interval: 100})


 /* botão voltar para o top */
 
 function backToTop () {
     const backToTopButton = document.querySelector(".back-to-top")

     if(window.scrollY >= 500) {
         backToTopButton.classList.add("show")
     } else {
         backToTopButton.classList.remove("show")
     }

 }
/* When Scroll */
 window.addEventListener("scroll" , function(){
    changeHeaderWhenScroll()
    backToTop()
})