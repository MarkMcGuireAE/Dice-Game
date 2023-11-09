// create dice rolling function

// let diceRollResult1 = 0
// let diceRollResult2 = 0
// let totalDiceRoll = 0

// create a loop with set interval that loops through my images and and makes it look like the dice is being rolled

let point = 0
let wagerAmount = 0
let bankroll = 100
let dice1 = document.querySelector(".dice1")
let dice2 = document.querySelector(".dice2")
let pointText = document.querySelector(".point")
let scoreboard = document.querySelector(".scoreboard")
let messages = document.querySelector(".messages")
let wagerDisplay = document.querySelector(".wager-amount")
let bankrollDisplay = document.querySelector(".bankroll")


function diceRoll () {
    let diceRoll  = Math.floor(Math.random() * (6  - 1 + 1) + 1)
    return diceRoll
}
function  clearAll () {
    wagerAmount = 0
    wagerDisplay.innerText = "Wager Amount: Select Chips to Increase Wager"
    point = 0
    pointText.innerText = "Point: Roll Dice to set point"
    dice1.style.background =""
    dice2.style.background =""
    h2.innerHTML = ""
        

}

function wagerMoreThanRoll(wager) {
    if (wager > bankroll - wagerAmount) {
        wagerAmount = wagerAmount
        wagerDisplay.innerText = "Wager Amount is " + wagerAmount
    } else {
        wagerAmount = wagerAmount + wager
        wagerDisplay.innerText = "Wager Amount is " + wagerAmount
    }
}

// console.log(diceRoll())

// function diceRoll2 () {
//     let diceRoll  = Math.floor(Math.random() * (6  - 1 + 1) + 1)
//     return diceRoll
// }

// console.log(diceRoll2())

// function rollDice () {
//     let totalDiceRoll = diceRollResult1 + diceRollResult2
//     return totalDiceRoll
// }

// console.log(rollDice())

let chip1 = document.querySelector(".c1")
console.log(chip1)
chip1.addEventListener("click", function(){
    wagerMoreThanRoll(1)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip5 = document.querySelector(".c5")
chip5.addEventListener("click", function(){
    
    wagerMoreThanRoll(5)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip10 = document.querySelector(".c10")
chip10.addEventListener("click", function(){
    wagerMoreThanRoll(10)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip25 = document.querySelector(".c25")
chip25.addEventListener("click", function(){
    wagerMoreThanRoll(25)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip50 = document.querySelector(".c50")
chip50.addEventListener("click", function(){
    wagerMoreThanRoll(50)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip100 = document.querySelector(".c100")
chip100.addEventListener("click", function(){
    wagerMoreThanRoll(100)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})





let btn = document.querySelector(".roll-dice")
btn.addEventListener("click", function(event){
    let diceRollResult1 = diceRoll()
    let diceRollResult2 = diceRoll()
    
    

    diceRollResult1 = diceRoll()
    diceRollResult2 = diceRoll()

    if(diceRollResult1 ==  1){
            dice1.style.background = "url(img/1.png)"
            dice1.style.backgroundSize  =  "contain"
            dice1.style.backgroundRepeat  = "no-repeat"
        } else  if(diceRollResult1 == 2){
            dice1.style.background = "url(img/2.png)"
            dice1.style.backgroundSize  =  "contain"
            dice1.style.backgroundRepeat  = "no-repeat"
        } else if (diceRollResult1 == 3){
            dice1.style.background = "url(img/3.png)"
            dice1.style.backgroundSize  =  "contain"
            dice1.style.backgroundRepeat  = "no-repeat"
        } else if (diceRollResult1 == 4){
            dice1.style.background = "url(img/4.png)"
            dice1.style.backgroundSize  =  "contain"
            dice1.style.backgroundRepeat  = "no-repeat"
        } else if (diceRollResult1 == 5){
            dice1.style.background = "url(img/5.png)"
            dice1.style.backgroundSize  =  "contain"
            dice1.style.backgroundRepeat  = "no-repeat"
        }
        else {
            dice1.style.background = "url(img/6.png)"
            dice1.style.backgroundSize  =  "contain"
            dice1.style.backgroundRepeat  = "no-repeat"
            }
        
         if(diceRollResult2 ==  1){
                dice2.style.background = "url(img/1.png)"
                dice2.style.backgroundSize  =  "contain"
                dice2.style.backgroundRepeat  = "no-repeat"
        } else  if(diceRollResult2 == 2){
                dice2.style.background = "url(img/2.png)"
                dice2.style.backgroundSize  =  "contain"
                dice2.style.backgroundRepeat  = "no-repeat"
        } else if (diceRollResult2 == 3){
                dice2.style.background = "url(img/3.png)"
                dice2.style.backgroundSize  =  "contain"
                dice2.style.backgroundRepeat  = "no-repeat"
        } else if (diceRollResult2 == 4){
                dice2.style.background = "url(img/4.png)"
                dice2.style.backgroundSize  =  "contain"
                dice2.style.backgroundRepeat  = "no-repeat"
        } else if (diceRollResult2 == 5){
                dice2.style.background = "url(img/5.png)"
                dice2.style.backgroundSize  =  "contain"
                dice2.style.backgroundRepeat  = "no-repeat"
        }
          else {
                dice2.style.background = "url(img/6.png)"
                dice2.style.backgroundSize  =  "contain"
                dice2.style.backgroundRepeat  = "no-repeat"
                }

  

    if (point === 0) {
        point = diceRollResult1  + diceRollResult2

        if (point === 7 || point === 11) {
            pointText.innerText = "Lucky Shooter, You Win"
            bankroll = bankroll + wagerAmount
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            setInterval(clearAll, 2000)

            
        } else if (point === 2 || point === 3 || point === 12) {
            pointText.innerText = "Not So Lucky Shooter, You Crapped Out"
            bankroll = bankroll - wagerAmount
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            setInterval(clearAll, 2000)
        }    else { 
        pointText.innerText = "Current Point: " + point + " keep shooting to see how lucky you are!"
        } 
    }  else {
        let currentRoll = diceRollResult1 + diceRollResult2
        let h2 = document.createElement('h2')
        messages.appendChild(h2)

            if (currentRoll === point)  {
            h2.innerText = "You hit your point... Your a real shooter kid!"
            bankroll = bankroll + wagerAmount
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            setInterval(clearAll, 2000)
            } else if (currentRoll === 7) {
            h2.innerText = "You crappeed out kid, the House always wins!!"
            bankroll = bankroll - wagerAmount
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            setInterval(clearAll, 2000)
            } else {
            h2.innerText = "Keep shooting kid!"
            setInterval(clearAll, 2000)
            
            }
        }
    })

   


    