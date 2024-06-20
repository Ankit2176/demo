document.write("hello javascript 2")


let h1 = document.querySelector("h1");

console.dir(h1.innertext);

h1.innerHTML = h1.innerHTML + " from apna college";


let divs = document.querySelectorAll(".box")
console.log(divs);

divs[0].innerHTML = "hello";
divs[1].innerHTML = "hello Hello"

divs[2].innerHTML = "hello hello Hello"

divs[1].style.backgroundColor = "blue";

let divas = document.querySelector("div")

console.log(divas)

let att = divas.getAttribute("name");
console.log(att)

divas.setAttribute("class", "division1");

divas.style.backgroundColor = "red";

pera = document.querySelector("section")
pera.style.backgroundColor = "yellow"
pera.style.height = "200px"


let btn = document.createElement("button");
btn.setAttribute("id", "Button1")

btn.innerText = "click me"

btn.style.color = "green"
btn.style.backgroundColor = "lightpink"
btn.style.width = "150px"
btn.style.height = "100px"
btn.style.border = "6px  Solid Black"


pera.before(btn);


let btn1 = document.createElement("Button");

btn1.innerText = "Click me once again !!"
btn1.style.fontSize = "40px"
btn1.style.color = "White"
btn1.style.backgroundColor = "red";

btn1.style.width = "100%";
btn1.style.height = "50%";

pera.after(btn1);



let newP = document.createElement("p");

newP.setAttribute("class", "peragraph")

newP.innerText = "Hello I am New Peraghraph";

newP.style.backgroundColor = "lightblue"

btn1.after(newP);

newP.classList.add("peragraph2") // to Adding New class In same Element 



