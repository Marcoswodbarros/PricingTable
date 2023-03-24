let firstBall = document.querySelector("#firstBall");
let secondBall = document.querySelector("#secondBall");
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let free = document.querySelector("#section__free");
let basic = document.querySelector("#section__basic");
let profissional = document.querySelector("#section__profissional");

let body = document.querySelector("body");

firstBall.addEventListener("click", ballToRight);
secondBall.addEventListener("click", ballToLeft);

function ballToRight () {
    firstBall.style.display = "none";
    secondBall.style.display = "block";
    title.style.color = "black";
    subtitle.style.color = "black";
    free.style.backgroundColor = "black";
    free.style.color = "white";
    basic.style.backgroundColor = "black";
    basic.style.color = "white";
    profissional.style.backgroundColor = "black";
    profissional.style.color = "white";
}

function ballToLeft () {
    firstBall.style.display = "block";
    secondBall.style.display = "none";
    title.style.color = "white";
    subtitle.style.color = "white";
    free.style.backgroundColor = "white";
    free.style.color = "black";
    basic.style.backgroundColor = "white";
    basic.style.color = "black";
    profissional.style.backgroundColor = "white";
    profissional.style.color = "black";
}