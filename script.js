let ErrorButtons = document.getElementsByClassName("nav-errbutton")
let HomeButton = document.getElementById("home")
let DownloadButtons = document.getElementsByClassName("Platform")
let accept = document.getElementById("accept-button")
let decline = document.getElementById("decline-button")
let scare = document.getElementById("scare")
let cookies = document.getElementById("cookies")
const video = document.getElementById("video");
const main = document.getElementById("main")

for (let btn of ErrorButtons) {
    btn.addEventListener("click", function(event) {
        event.preventDefault()
        window.location.href = "privacy.html"
    })
}

let hasClicked;

window.onbeforeunload = function( ) {
    if(hasClicked) return true;
};

function buttonClick(event) {
                event.preventDefault();
                if(!hasClicked) hasClicked = true;
                main.hidden = true;
                scare.hidden = false;
                video.play();
                videoClick();
            }

            function videoClick(event) {
                if(event) event.preventDefault();
                // if not fullscreen
                const { documentElement } = document;
                if(documentElement.requestFullscreen) documentElement.requestFullscreen();
                else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
                else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
                else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
            }

HomeButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "index.html"
})

for (let e of DownloadButtons) {
    e.addEventListener("click", buttonClick);
}

scare.hidden = true

accept.addEventListener("click", function(e){
    e.preventDefault()
    cookies.hidden = true
})

decline.addEventListener("click", function(e){
    e.preventDefault()
    cookies.hidden = true
})

video.addEventListener("click", videoClick);