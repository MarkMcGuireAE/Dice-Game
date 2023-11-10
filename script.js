// create dice rolling function

// let diceRollResult1 = 0
// let diceRollResult2 = 0
// let totalDiceRoll = 0

// create a loop with set interval that loops through my images and and makes it look like the dice is being rolled

let point = 0
let wagerAmount = 0
let gameEndState = false
let bankroll = 250
let totalSideBets = 0

// sidebet variables



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
    messages.innerHTML = ""
    }

function wagerMoreThanRoll(wager) {
    if (wager > bankroll - (wagerAmount + totalSideBets)) {
        wagerAmount = wagerAmount
        wagerDisplay.innerText = "Wager Amount is " + wagerAmount
    } else {
        wagerAmount = wagerAmount + wager
        wagerDisplay.innerText = "Wager Amount is " + wagerAmount
    }
}

function reset () {
    // <div class="scoreboard">
    //         <h2 class="bankroll">Bankroll: $100</h2>
    //         <h2 class="point">Current Point: Roll Dice to set point</h2>
    //         <h2 class="wager-amount">Wager Amount: Select Chips to Increase Wager</h2>
    //         <div class="messages"></div>
    //     </div>
    bankroll = 250
    wagerAmount = 0
    scoreboard.innerHTML =""
    let h2bankRoll = document.createElement("h2")
    h2bankRoll.innerText = "Bankroll: $" + bankroll
    scoreboard.appendChild(h2bankRoll)
    let h2point = document.createElement("h2")
    h2point.innerText = "Current Point: Roll Dice to set point"
    scoreboard.appendChild(h2point)
    let h2wagerAmount = document.createElement("h2")
    h2wagerAmount.innerText = "Wager Amount: Select Chips to Increase Wager"
    scoreboard.appendChild(h2wagerAmount)
    let divMessages = document.createElement("div")
    divMessages.classList.add("messages")
    scoreboard.appendChild(divMessages)
}

function gameOver () {
    clearAll ()
    scoreboard.innerHTML =""
    let h1 = document.createElement('h1')
    h1.innerText  =  "Unfortunately, the House broke your bankroll, press reset to play again."
    scoreboard.appendChild(h1)
    let resetButton = document.createElement('button')
    resetButton.innerHTML = "reset"
    scoreboard.appendChild(resetButton)
    resetButton.addEventListener("click", function(){
        reset () })


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
chip1.addEventListener("click", function(){
    wagerMoreThanRoll(1, wagerAmount, wagerDisplay)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip5 = document.querySelector(".c5")
chip5.addEventListener("click", function(){
    
    wagerMoreThanRoll(5, wagerAmount, wagerDisplay)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip10 = document.querySelector(".c10")
chip10.addEventListener("click", function(){
    wagerMoreThanRoll(10, wagerAmount, wagerDisplay)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip25 = document.querySelector(".c25")
chip25.addEventListener("click", function(){
    wagerMoreThanRoll(25, wagerAmount, wagerDisplay)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip50 = document.querySelector(".c50")
chip50.addEventListener("click", function(){
    wagerMoreThanRoll(50, wagerAmount, wagerDisplay)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})
let chip100 = document.querySelector(".c100")
chip100.addEventListener("click", function(){
    wagerMoreThanRoll(100, wagerAmount, wagerDisplay)
    // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
})

// Side Bets////////////////

///// field bet bar

let field = document.querySelector(".field")
field.addEventListener("click", function(){

    let fieldBet = 0
    let fieldDisplay = document.querySelector(".field-amount")
    function wagerMoreThanRollF(wager) {
        if (wager > bankroll - (wagerAmount + fieldBet)) {
            fieldBet = fieldBet
            fieldDisplay.innerText = "Field Bet Amount is " + fieldBet
        } else {
            fieldBet = fieldBet + wager
            fieldDisplay.innerText = "Field Bet Amount is " + fieldBet
        }
    }

        let chip1 = document.querySelector(".fieldc1")
        chip1.addEventListener("click", function(){
            wagerMoreThanRollF(1)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip5 = document.querySelector(".fieldc5")
        chip5.addEventListener("click", function(){
            
            wagerMoreThanRollF(5)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip10 = document.querySelector(".fieldc10")
        chip10.addEventListener("click", function(){
            wagerMoreThanRollF(10)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip25 = document.querySelector(".fieldc25")
        chip25.addEventListener("click", function(){
            wagerMoreThanRollF(25)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip50 = document.querySelector(".fieldc50")
        chip50.addEventListener("click", function(){
            wagerMoreThanRollF(50)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip100 = document.querySelector(".fieldc100")
        chip100.addEventListener("click", function(){
            wagerMoreThanRollF(100)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })

        let clearButt = document.createElement("button")
        clearButt.innerText = "Clear field bet"
        let blankDiv1 = document.querySelector(".blank-div")
        blankDiv1.innerHTML=""
        blankDiv1.appendChild(clearButt)

        clearButt.addEventListener("click", function(){
            fieldBet = 0
            fieldDisplay.innerText = "Field Bet Amount: No current wager"


        })


    

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
            setTimeout(clearAll, 3000)

            
        } else if (point === 2 || point === 3 || point === 12) {
            pointText.innerText = "Not So Lucky Shooter, You Crapped Out"
            bankroll = bankroll - wagerAmount
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            setTimeout(clearAll, 3000)
        }    else { 
        pointText.innerText = "Current Point: " + point + " keep shooting to see how lucky you are!"
        wagerDisplay.innerText ="Your current wager  is "+ wagerAmount+", If your feeling real lucky,  you can press your bet. Select chip to increase wager."
        } 
    }  else {
        let currentRoll = diceRollResult1 + diceRollResult2
        messages.innerHTML =""
        let h2 = document.createElement('h2')
        messages.appendChild(h2)

            if (currentRoll === point)  {
            h2.innerText = "You hit your point... Your a real shooter kid!"
            bankroll = bankroll + wagerAmount
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            setTimeout(clearAll, 3000)
            } else if (currentRoll === 7) {
            h2.innerText = "You crappeed out kid, the House always wins!!"
            bankroll = bankroll - wagerAmount
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            setTimeout(clearAll, 3000)
            } else {
                messages.innerHTML =""
                let h2 = document.createElement('h2')
                messages.appendChild(h2)
                wagerDisplay.innerText = wagerDisplay.innerText ="Your current wager  is "+ wagerAmount+", If your feeling real lucky,  you can press your bet. Select chip to increase wager."
                h2.innerText = "Keep shooting kid!"
            
            
            }
        }
    
        if (bankroll === 0) {
            gameEndState = true
            gameOver()  
              
        }

        
        // Side Bets 

        

    
    })

    

   


    