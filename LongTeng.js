window.onload = function () {
    frist()
}

let RainbowBall = document.getElementsByClassName('RainbowBall')[0];

let RainbowBallDeg = 1;
localStorage.setItem("RainbowBallDeg", RainbowBallDeg);

function frist() {
    localStorage.setItem("RainbowBallDeg", parseInt(localStorage.RainbowBallDeg) + 2);
    RainbowBall.style.transform = "rotate(" + localStorage.RainbowBallDeg + "deg)";
    // RainbowBall.style.left = +localStorage.RainbowBallDeg + 1 + "px";
    // if (localStorage.RainbowBallDeg > 2490) {
    //     localStorage.setItem("RainbowBallDeg", 0);
    //     setTimeout("second()", 100);
    // }
    // else {
    //     setTimeout("second()", 100);
    // }
}

function second() {
    localStorage.setItem("RainbowBallDeg", parseInt(localStorage.RainbowBallDeg) + 2);
    RainbowBall.style.transform = "rotate(" + localStorage.RainbowBallDeg + "deg)";
    // RainbowBall.style.left = +localStorage.RainbowBallDeg + 1 + "px";
    setTimeout("third()", 100);
}

function third() {
    localStorage.setItem("RainbowBallDeg", parseInt(localStorage.RainbowBallDeg) + 2);
    RainbowBall.style.transform = "rotate(" + localStorage.RainbowBallDeg + "deg)";
    // RainbowBall.style.left = +localStorage.RainbowBallDeg + 1 + "px";
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
