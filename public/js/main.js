let button = document.getElementById("noir")
let buttonB = document.getElementById("blanc")
let section = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")
let section5 = document.getElementById("caroussel")
let section7 = document.getElementById("section7")
let para = document.getElementById("para1")
let para2 = document.getElementById("para2")
let para3 = document.getElementById("para3")
let para4 = document.getElementById("para4")
let para5 = document.getElementById("para5")
let para6 = document.getElementById("para6")
let para7 = document.getElementById("para7")
let para8 = document.getElementById("para8")
let para9 = document.getElementById("para9")
let para10 = document.getElementById("para10")
let laNav = document.getElementById("laNav")
console.log(laNav);
let liste = document.getElementById("li1")
let liste2 = document.getElementById("li2")
let liste3 = document.getElementById("li3")
let liste4 = document.getElementById("li4")
let liste5 = document.getElementById("li5")
let liste6 = document.getElementById("li6")
console.log(liste);
let titre6 = document.getElementById("h61")

let titre61 = document.getElementById("h62")
console.log(titre61);
let titre62 = document.getElementById("h63")





let section6 = document.getElementById("section6")

let map = document.querySelectorAll("#map>button")
console.log(map);

let empor = document.getElementById("empo")
let body = document.querySelector("body")
let footer = document.getElementById("footer")

button.addEventListener("click", (e) => {
    e.preventDefault()
section7.style.backgroundColor = "black"
empor.style.color = "white"
liste.style.color = "white"
liste2.style.color = "white"
liste3.style.color = "white"
liste4.style.color = "white"
liste5.style.color = "white"
liste6.style.color = "white"
titre6.setAttribute("class", "text-white text-uppercase mb-5")
titre61.setAttribute("class", "text-white text-uppercase mb-5")
titre62.setAttribute("class", "text-white text-uppercase mb-5")
footer.setAttribute("class", "bg-dark")

    


laNav.style.backgroundColor = "black"
para2.style.color = "white"
para3.style.color = "white"
para4.style.color = "white"
para5.style.color = "white"
para6.style.color = "white"
para7.style.color = "white"
para8.style.color = "white"
para9.style.color = "white"
para10.style.color = "white"
    
para.style.color = "white"
section7.style.backgroundColor = "black"
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
    footer.setAttribute("class", "bg-white")
    titre6.setAttribute("class", "text-dark text-uppercase mb-5")
    titre61.setAttribute("class", "text-dark text-uppercase mb-5")
    titre62.setAttribute("class", "text-dark text-uppercase mb-5")
empor.style.color = "black"
laNav.style.backgroundColor = "white"
liste.style.color = "black"
liste2.style.color = "black"
liste3.style.color = "black"
liste4.style.color = "black"
liste5.style.color = "black"
liste6.style.color = "black"
section.style.backgroundColor = "white"
section2.style.backgroundColor = "white"
section3.style.backgroundColor = "white"
section4.style.backgroundColor = "white"
section5.style.backgroundColor = "white"
section6.style.backgroundColor = "white"
section7.style.backgroundColor = "white"

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

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-10%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-30%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translatex(-40%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('quatre')){
        slides.style.transform = 'translatex(-60%)';
        e.target.classList.add('active');
      } 
  }
});




