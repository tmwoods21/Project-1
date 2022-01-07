console.log('js:loaded')

let hunger = 0
let sleepiness = 0
let boredom = 0
let aging = 0

const feedbtn = document.getElementById("feedbtn")
//console.log(feedbtn)
feedbtn.addEventListener("click", feed)

function feed() {
    console.log("feedthepet")
    let petHunger = hunger
    
    hunger = hunger-1
    //console.log(hunger)
    hungervalue.innerText = hunger
}


const sleepbtn = document.getElementById("sleepbtn")

sleepbtn.addEventListener("click", sleep)

function sleep() {
    console.log("putpettobed")
    let petSleepiness = sleepiness
    sleepiness = sleepiness-1
    //console.log(sleepiness)
}

const playbtn = document.getElementById("playbtn")

playbtn.addEventListener("click", play)

function play() {
    console.log("playwiththepet")
    let petBoredom = boredom
    boredom = boredom-1
    console.log(boredom)
}

const lightsbtn = document.getElementById("lightsbtn")
lightsbtn.addEventListener("click", onoff)
function onoff() {
    console.log("turnlightsonoff")
}

const hungerNeeds = document.querySelector("#hunger-needs")

const foodNeeds = document.querySelector("#sleep-needs")

const playNeeds = document.querySelector("#play-needs")

let gameTimer = setInterval( game , 2000)

function game() {
   
    hunger = hunger+1
    sleepiness = sleepiness+1
    boredom = boredom+1
    hungervalue.innerText = hunger
    sleepinessvalue.innerText = sleepiness
    boredomvalue.innerText = boredom
    
    console.log("hungerlevel" , hunger , "slepinesslevel" , sleepiness , "boredomlevel", boredom)
    if (hunger == 10) {
        alert("game over")
        clearInterval(gameTimer)
    }else if (aging == 10) {
        alert("you win")
        clearInterval(petAge , gameTimer)
    }
}

let petAge = setInterval( age , 3000)

function age() {
    aging = aging+1
    agingvalue.innerText = aging
    //console.log("aginglevel" , aging)
}

let hungervalue = document.getElementById("hungervalue")
let sleepinessvalue = document.getElementById("sleepinessvalue")
let boredomvalue = document.getElementById("boredomvalue")
let agingvalue = document.getElementById("agingvalue")







    