window.onload = function () {
    frist()
}

let RainbowBall = document.getElementsByClassName('RainbowBall')[0];

let RainbowBallDeg = 1;
localStorage.setItem("RainbowBallDeg", RainbowBallDeg);

function frist() {
    localStorage.setItem("RainbowBallDeg", parseInt(localStorage.RainbowBallDeg) + 2);
    RainbowBall.style.transform = "rotate(" + localStorage.RainbowBallDeg + "deg)";
    setTimeout("second()", 100);
}

function second() {
    localStorage.setItem("RainbowBallDeg", parseInt(localStorage.RainbowBallDeg) + 2);
    RainbowBall.style.transform = "rotate(" + localStorage.RainbowBallDeg + "deg)";
    setTimeout("third()", 100);
}

function third() {
    localStorage.setItem("RainbowBallDeg", parseInt(localStorage.RainbowBallDeg) + 2);
    RainbowBall.style.transform = "rotate(" + localStorage.RainbowBallDeg + "deg)";
    setTimeout("frist()", 100);
}



window.addEventListener("scroll", () => {
    let ActivityScheduleImg = document.getElementsByClassName('ActivityScheduleImg');
    // console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 2900) {
        ActivityScheduleImg[2].style.display = "block";

    } else {

    }
})