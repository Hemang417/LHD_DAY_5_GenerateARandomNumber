// let calc = Math.floor(Math.random()*10 + 1)
let getRandomNumber = function(start, range){
    let getRandom = Math.floor(Math.random()*range + start)
    while(getRandom>range){
        getRandom = Math.floor(Math.random()*range + start)
    }
    return getRandom
}

const RandomNumber = document.getElementById("random-number")
RandomNumber.textContent = getRandomNumber(500, 1000)