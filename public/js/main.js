let button = document.getElementById("noir")
let buttonB = document.getElementById("blanc")
let section = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")
let section5 = document.getElementById("section5")
let section6 = document.getElementById("section6")
let section7 = document.getElementById("section7")
let body = document.querySelector("body")
button.addEventListener("click", (e) => {
    e.preventDefault()
    body.style.backgroundColor = "black"
    body.style.color = "white"

section.style.backgroundColor = "black"
section2.style.backgroundColor = "black"
section3.style.backgroundColor = "black"
section4.style.backgroundColor = "black"
section5.style.backgroundColor = "black"
section6.style.backgroundColor = "black"
section7.style.backgroundColor = "black"

})

buttonB.addEventListener("click", (e) => {
    e.preventDefault()
    body.style.backgroundColor = ""
    body.style.color = ""

section.style.backgroundColor = ""
section2.style.backgroundColor = ""
section3.style.backgroundColor = ""
section4.style.backgroundColor = ""
section5.style.backgroundColor = ""
section6.style.backgroundColor = ""
section7.style.backgroundColor = ""

})

let header = document.querySelector("header")
let empo = document.getElementById("empo")
console.log(empo);
let nav = document.querySelector(".navbar")
console.log(nav);
let h1 = document.getElementById("h1")


window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 259) {
        
        header.style.position = "fixed"
        header.style.top = "0"
        header.style.width = "100%"
        header.style.zIndex = "2"
        empo.setAttribute("class", "d-block") 
        h1.style.display = "none"
        empo.style.marginRight = "150px"
        
        
        
        
        
    } else {
        header.style.position = 'static'
        empo.setAttribute("class", "d-none")
        h1.style.display = ""
    }
})


let connex = document.getElementById("connexion")
let pop = document.getElementById("popup")
let exit = document.getElementById("exit")
exit.addEventListener("click", (e) => {
    pop.setAttribute("class", "text-center d-none")
    e.preventDefault()
})
console.log(pop);

connex.addEventListener("click", (e) => {
    e.preventDefault()
    pop.setAttribute("class", "text-center")
})


let reg = document.getElementById("reg")
let sign = document.getElementById("sign")
let form = document.getElementById("forr")
let maman = document.getElementById("maman")
console.log(form);

reg.addEventListener("click", (e) => {
    e.preventDefault();
    maman.setAttribute("class", "p-3")
    form.setAttribute("class", "d-none")
    
})

sign.addEventListener("click", (e) => {
    e.preventDefault()
    maman.setAttribute("class", "p-3 d-none")
    form.setAttribute("class", "")
})



window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        pop.style.position = "fixed"
        pop.style.top = "100px"
        pop.style.width = "50%"
        pop.style.zIndex = "2"
        pop.style.height = "50%"
       
        
        
        
    }
})





