console.log('js:loaded')

const feedbtn = document.getElementById("feedbtn")
console.log(feedbtn)
feedbtn.addEventListener("click", feed)

function feed() {
    console.log("feedthepet")
}

const sleepbtn = document.getElementById("sleepbtn")
console.log(sleepbtn)
sleepbtn.addEventListener("click", sleep)

function sleep() {
    console.log("putpettobed")
}

const playbtn = document.getElementById("playbtn")
console.log(playbtn)
playbtn.addEventListener("click", play)

function play() {
    console.log("playwiththepet")
}