let firstBall = document.querySelector("#firstBall");
let secondBall = document.querySelector("#secondBall");
let title = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let free = document.querySelector("#section__free");
let basic = document.querySelector("#section__basic");
let basicContainer = document.querySelector("#search__button--container");
let basicTitle = document.querySelector("#basic__title");
let profissional = document.querySelector("#section__profissional");

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
    basicContainer.style.backgroundColor = "black"; 
    basicTitle.style.color = "white";   
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
    basicContainer.style.backgroundColor = "#ffcc29";
    basicTitle.style.color = "#1d539e";
    profissional.style.backgroundColor = "white";
    profissional.style.color = "black";
}