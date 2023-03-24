let firstBall = document.querySelector("#firstBall");
let secondBall = document.querySelector("#secondBall");

firstBall.addEventListener("click", ballToRight);
secondBall.addEventListener("click", ballToLeft);

function ballToRight () {
    firstBall.style.display = "none";
    secondBall.style.display = "block";
}

function ballToLeft () {
    firstBall.style.display = "block";
    secondBall.style.display = "none";
}