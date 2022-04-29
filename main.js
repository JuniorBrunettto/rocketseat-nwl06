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
const header = document.querySelector("#header")
const navHeigth = header.offsetHeight

window.addEventListener("scroll" , function(){
    if(window.scrollY >= navHeigth){
        // scroll é maior que a altura do header
        header.classList.add("scroll")
    } else {
        // scroll menor que a altura do header
        header.classList.remove("scroll")
    }
})

