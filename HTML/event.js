
let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clciked");

    btn1.innerText = "i am Clicked"
}


let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () => {
    console.log("btn2 was clciked");

    btn2.innerText = "i am Clicked"
}

let div1 = document.querySelector(".div1");

div1.onmouseover = () => {
    console.log("hoverd");
    div1.innerText = "i am hoverd ";
    div1.style.backgroundColor = "red";
}


div1.addEventListener("mousedown", (evt) => {
    div1.innerText = "i am down";
    div1.style.backgroundColor = "blue";
})



let modebtn = document.querySelector("#mode");
let body = document.querySelector("body")
let currMode = "light";

modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark")
        body.classList.remove("light");
    }
    else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");



    }
    console.log(currMode)
});

//////////////classses

class ToyotaCar {
    constructor(brand, mileage) {
        console.log("creating new object")
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");

    }
    stop() {
        console.log("stop");
    }
}


let fortuner = new ToyotaCar("fortuner", 10);
let lexus = new ToyotaCar("lexus", 30);
let marin = new ToyotaCar("marin", 30);




// Hide all level 1 headings over half a second; then wait for 1.5 seconds
// and reveal all level 1 headings over 0.3 seconds
// $( "h1" ).hide().delay( 1000 ).show( 5000).hide(1000);

// Per-property easing
// $("h1").animate(
//     {
//         left: "+=50",
//         opacity: 0.25
//     },

//     // Duration
//     3000,

//     // Callback to invoke when the animation is finished
//     function () {
//         console.log("done!");
//     }
// );

// // box

// $(".box").animate({
//     'background-color': 'blue'
// },
//     3000
// );



// $("div.box").click($(this).animate({
//     'background-color': 'red'
// }, 1000,
//     function () {
//         console.log("clcicked");
//     }));


$(document).ready(function () {
    $("div.box").click(function () {
        $(this).css('backgroundColor','blue')

    })
})