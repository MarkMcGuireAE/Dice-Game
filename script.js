// create dice rolling function

// let diceRollResult1 = 0
// let diceRollResult2 = 0
// let totalDiceRoll = 0

// create a loop with set interval that loops through my images and and makes it look like the dice is being rolled

let point = 0
let wagerAmount = 0
let gameEndState = false
let bankroll = 250
let fieldBet = 0
let any7 = 0 
let anyCraps = 0
let totalSideBets = 0


// sidebet variables



let dice1 = document.querySelector(".dice1")
let dice2 = document.querySelector(".dice2")
let pointText = document.querySelector(".point")
let scoreboard = document.querySelector(".scoreboard")
let messages = document.querySelector(".messages")
let wagerDisplay = document.querySelector(".wager-amount")
let bankrollDisplay = document.querySelector(".bankroll")
let fieldDisplay = document.querySelector(".field-amount")
let clearButt = document.createElement("button")
let blankDiv1 = document.querySelector(".blank-div")
let sideBetDisplay = document.querySelector(".sidebet-display")
let any7Display = document.querySelector(".any7-amount")
let blankDiv2 = document.querySelector(".blank-div2")
let anyCrapsDisplay = document.querySelector(".anyCrap-amount")
let blankDiv3 = document.querySelector(".blank-div3")
let placeBetsMessage = document.querySelector(".placebets")


function diceRoll () {
    let diceRoll  = Math.floor(Math.random() * (6  - 1 + 1) + 1)
    return diceRoll
}
// function not working. also bets continuee to add up in field. and want to mmake it so you have to click field again to bee able to bet.
function clearField () {
    fieldDisplay.innerText = "Field Bet Amount: No current wager"
    totalSideBets = totalSideBets - fieldBet
    sideBetDisplay.innerText = "Total Side Bets: " + totalSideBets
    fieldBet = 0
    blankDiv1.innerHTML = ""
    
}

function clear7 () {
    any7Display.innerText = "Any 7 Bet Amount: No current wager"
    totalSideBets = totalSideBets - any7
    sideBetDisplay.innerText = "Total Side Bets: " + totalSideBets
    any7 = 0
    blankDiv2.innerHTML = ""
}

function clearCraps () {
    anyCrapsDisplay.innerText = "Any Craps Bet Amount: No current wager"
    totalSideBets = totalSideBets - anyCraps
    sideBetDisplay.innerText = "Total Side Bets: " + totalSideBets
    anyCraps = 0
    blankDiv3.innerHTML = ""
}


function  clearAll () {
    wagerAmount = 0
    wagerDisplay.innerText = "Wager Amount: Select Chips to Increase Wager"
    point = 0
    pointText.innerText = "Point: Roll Dice to set point"
    dice1.style.background =""
    dice2.style.background =""
    messages.innerHTML = ""
    clearField ()
    clear7 ()
    clearCraps ()
    }

function clearSide () {
    clearField ()
    clear7 ()
    clearCraps ()
}

function placeBetMenu () {
    placeBetsMessage.innerText = "Click on the Number Icons below to wager on a Place Bet. If Place Bet has a current wager, a chip will appear on number icon."
    let h4 = document.createElement ("h4")
    
    
    
    let div4 = document.createElement("div")
    div4.classList.add("placebet-icons")
    let placeBet4 = document.createElement("img")
    placeBet4.src = "img/place4.png"
    div4.appendChild(placeBet4)
    placeBetsMessage.appendChild(div4)




    let div5 = document.createElement("div")
    div5.classList.add("placebet-chips")
    let placeBetChip1 = document.createElement("img")
    placeBetChip1.src = "img/1 chip.png"
    div5.appendChild(placeBetChip1)
    let placeBetChip5 = document.createElement("img")
    placeBetChip5.src = "img/5 chip.png"
    div5.appendChild(placeBetChip5)
    let placeBetChip10 = document.createElement("img")
    placeBetChip10.src = "img/10 chip.png"
    div5.appendChild(placeBetChip10)
    let placeBetChip25 = document.createElement("img")
    placeBetChip25.src = "img/25 chip.png"
    div5.appendChild(placeBetChip25)
    let placeBetChip50 = document.createElement("img")
    placeBetChip50.src = "img/50 chip.png"
    div5.appendChild(placeBetChip50)
    let placeBetChip100 = document.createElement("img")
    placeBetChip100.src = "img/100 chip.png"
    div5.appendChild(placeBetChip100)
    placeBetsMessage.appendChild(div5)
}


// function wagerMoreThanRoll(wager) {
//     if (wager > bankroll - (wagerAmount + totalSideBets)) {
//         wagerAmount = wagerAmount
//         wagerDisplay.innerText = "Wager Amount is " + wagerAmount
//     } else {
//         wagerAmount = wagerAmount + wager
//         wagerDisplay.innerText = "Wager Amount is " + wagerAmount
//     }
// }

function reset () {
    // bankroll = 250
    // wagerAmount = 0
    // point = 0
    // scoreboard.innerHTML =""
    // let h2bankRoll = document.createElement("h2")
    // h2bankRoll.innerText = "Bankroll: $" + bankroll
    // scoreboard.appendChild(h2bankRoll)
    // let h2point = document.createElement("h2")
    // h2point.innerText = "Current Point: Roll Dice to set point"
    // scoreboard.appendChild(h2point)
    // let h2wagerAmount = document.createElement("h2")
    // h2wagerAmount.innerText = "Wager Amount: Select Chips to Increase Wager"
    // scoreboard.appendChild(h2wagerAmount)
    // let divMessages = document.createElement("div")
    // divMessages.classList.add("messages")
    // scoreboard.appendChild(divMessages)
    location.reload()
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

function wagerMoreThanRoll(wager) {
    if (wager > bankroll - (wagerAmount + fieldBet + any7 + anyCraps)) {
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

// Side Bets////////////////

///// field bet bar

let field = document.querySelector(".field")
field.addEventListener("click", function(){


      
    
    function wagerMoreThanRollF(wager) {
        if (wager > bankroll - (wagerAmount + fieldBet + any7 + anyCraps)) {
            fieldBet = fieldBet
            totalSideBets = fieldBet + any7 + anyCraps
            fieldDisplay.innerText = "Field Bet Amount is " + fieldBet
            sideBetDisplay.innerText = "Total Side Bets: " + totalSideBets
            
        } else {
            fieldBet = fieldBet + wager
            totalSideBets = fieldBet + any7 + anyCraps
            fieldDisplay.innerText = "Field Bet Amount is " + fieldBet
            sideBetDisplay.innerText = "Total Side Bets: " + totalSideBets
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
        clearButt.innerText = "Clear Field bet"
        let blankDiv1 = document.querySelector(".blank-div")
        blankDiv1.innerHTML=""
        blankDiv1.appendChild(clearButt)

        clearButt.addEventListener("click", function(){
            clearField  ()


        })


    

})

let any7pic = document.querySelector(".any7")
any7pic.addEventListener("click", function(){


      
    
    function wagerMoreThanRoll7(wager) {
        if (wager > bankroll - (wagerAmount + fieldBet + any7 + anyCraps)) {
            any7 = any7
            totalSideBets = fieldBet + any7 + anyCraps
            any7Display.innerText = "Any 7 Bet Amount is " + any7
            sideBetDisplay.innerText = "Total Side Bets: " + totalSideBets
            
        } else {
            any7 = any7 + wager
            totalSideBets = fieldBet + any7 + anyCraps
            any7Display.innerText = "Any 7 Bet Amount is " + any7
            sideBetDisplay.innerText = "Total Side Bets: " + totalSideBets
        }
    }

        let chip1 = document.querySelector(".any7c1")
        chip1.addEventListener("click", function(){
            wagerMoreThanRoll7(1)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip5 = document.querySelector(".any7c5")
        chip5.addEventListener("click", function(){
            
            wagerMoreThanRoll7(5)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip10 = document.querySelector(".any7c10")
        chip10.addEventListener("click", function(){
            wagerMoreThanRoll7(10)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip25 = document.querySelector(".any7c25")
        chip25.addEventListener("click", function(){
            wagerMoreThanRoll7(25)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip50 = document.querySelector(".any7c50")
        chip50.addEventListener("click", function(){
            wagerMoreThanRoll7(50)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip100 = document.querySelector(".any7c100")
        chip100.addEventListener("click", function(){
            wagerMoreThanRoll7(100)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })

        let clearButt2 = document.createElement("button")
        clearButt2.innerText = "Clear Any 7 bet"
        blankDiv2.innerHTML=""
        blankDiv2.appendChild(clearButt2)

        clearButt2.addEventListener("click", function(){
            clear7 ()


        })


    

})

let anyCrapPic = document.querySelector(".anyCraps")
anyCrapPic.addEventListener("click", function(){


      
    
    function wagerMoreThanRollC(wager) {
        if (wager > bankroll - (wagerAmount + fieldBet + any7 + anyCraps)) {
            anyCraps = anyCraps
            totalSideBets = fieldBet + any7 + anyCraps
            anyCrapsDisplay.innerText = "Any Craps Bet Amount is " + anyCraps
            sideBetDisplay.innerText = "Total Side Bets: " + totalSideBets
            
        } else {
            anyCraps = anyCraps + wager
            totalSideBets = fieldBet + any7 + anyCraps
            anyCrapsDisplay.innerText = "Any Craps Bet Amount is " + anyCraps
            sideBetDisplay.innerText = "Total Side Bets: " + totalSideBets
        }
    }

        let chip1 = document.querySelector(".anycrapsc1")
        chip1.addEventListener("click", function(){
            wagerMoreThanRollC(1)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip5 = document.querySelector(".anycrapsc5")
        chip5.addEventListener("click", function(){
            
            wagerMoreThanRollC(5)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip10 = document.querySelector(".anycrapsc10")
        chip10.addEventListener("click", function(){
            wagerMoreThanRollC(10)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip25 = document.querySelector(".anycrapsc25")
        chip25.addEventListener("click", function(){
            wagerMoreThanRollC(25)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip50 = document.querySelector(".anycrapsc50")
        chip50.addEventListener("click", function(){
            wagerMoreThanRollC(50)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })
        let chip100 = document.querySelector(".anycrapsc100")
        chip100.addEventListener("click", function(){
            wagerMoreThanRollC(100)
            // wagerDisplay.innerText = "Wager Amount is " + wagerAmount
        })

        let clearButt3 = document.createElement("button")
        clearButt3.innerText = "Clear Any Craps bet"
        blankDiv3.innerHTML=""
        blankDiv3.appendChild(clearButt3)

        clearButt3.addEventListener("click", function(){
            clearCraps ()


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

  console.log(fieldBet)

  if (fieldBet !== 0) {
        let fieldBetRoll = diceRollResult1 + diceRollResult2
        if (fieldBetRoll === 2 || fieldBetRoll === 12) {
            bankroll = bankroll + fieldBet * 2
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            fieldDisplay.innerText = "You won your field bet, house pays you 2:1! Click field bet icon to place another bet!"
            setTimeout(clearField, 3000)
            setTimeout(clearSide, 3100)
            
            
        } else if (fieldBetRoll === 3 || fieldBetRoll === 4 || fieldBetRoll === 9 || fieldBetRoll === 10 || fieldBetRoll === 11) {
            bankroll = bankroll + fieldBet
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            fieldDisplay.innerText = "You won your field bet, house pays you even money! Click field bet icon to place another bet!"
            setTimeout(clearField, 3000)
            setTimeout(clearSide, 3100)
           

        } else {
            bankroll = bankroll - fieldBet
            bankrollDisplay.innerText = "Bankroll: " + bankroll
            fieldDisplay.innerText = "You lost your field bet. Click field bet icon to place another bet!"
            setTimeout(clearField, 3000)
            setTimeout(clearSide, 3100)
           
        }
}

if (any7 !== 0) {
    let any7Roll = diceRollResult1 + diceRollResult2
    if (any7Roll === 7 ) {
        bankroll = bankroll + any7 * 5
        bankrollDisplay.innerText = "Bankroll: " + bankroll
        any7Display.innerText = "You won your Any 7 bet, house pays you 5:1! Click Any 7 bet icon to place another bet!"
        setTimeout(clear7, 3000)
        setTimeout(clearSide, 3100)
    } else {
        bankroll = bankroll - any7
        bankrollDisplay.innerText = "Bankroll: " + bankroll
        any7Display.innerText = "You lost your Any 7 bet. Click Any 7 bet icon to place another bet!"
        setTimeout(clear7, 3000)
        setTimeout(clearSide, 3100)
    }
}

if (anyCraps !== 0) {
    let anyCrapsRoll = diceRollResult1 + diceRollResult2
    if (anyCrapsRoll === 2 || anyCrapsRoll === 3 || anyCrapsRoll === 12) {
        bankroll = bankroll + anyCraps * 8
        bankrollDisplay.innerText = "Bankroll: " + bankroll
        anyCrapsDisplay.innerText = "You won your Any Craps bet, house pays you 8:1! Click Any Craps bet icon to place another bet!"
        setTimeout(clearCraps, 3000)
        setTimeout(clearSide, 3100)
    } else {
        bankroll = bankroll - any7
        bankrollDisplay.innerText = "Bankroll: " + bankroll
        anyCrapsDisplay.innerText = "You lost your Any Craps bet. Click Any Craps icon to place another bet!"
        setTimeout(clearCraps, 3000)
        setTimeout(clearSide, 3100)
    }
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
        }    
        else { 
        pointText.innerText = "Current Point: " + point + " keep shooting to see how lucky you are!"
        wagerDisplay.innerText ="Your current wager  is "+ wagerAmount+", If your feeling real lucky,  you can press your bet. Select chip to increase wager."
        placeBetsMessage.innerText = "Click on the Number Icons below to wager on a Place Bet. If Place Bet has a current wager, a chip will appear on number icon."
        placeBetMenu ()


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

        // if (fieldBet !== 0) {
        //     let fieldBetRoll = diceRollResult1 + diceRollResult2
        //         if (fieldBetRoll === 2 || fieldBetRoll === 12) {
        //             bankroll = bankroll + fieldBet * 2
        //             bankrollDisplay.innerText = "Bankroll: " + bankroll
        //             fieldDisplay.innerText = "You won your field bet, house pays you 2:1! Click field bet icon to place another bet!"
        //             clearField ()
        //         } else if (fieldBetRoll === 3 || fieldBetRoll === 4 || fieldBetRoll === 9 || fieldBetRoll === 10 || fieldBetRoll === 11) {
        //             bankroll = bankroll + fieldBet
        //             bankrollDisplay.innerText = "Bankroll: " + bankroll
        //             fieldDisplay.innerText = "You won your field bet, house pays you even money! Click field bet icon to place another bet!"
        //             clearField ()
        //         } else {
        //             bankroll = bankroll - fieldBet
        //             bankrollDisplay.innerText = "Bankroll: " + bankroll
        //             fieldDisplay.innerText = "You lost your field bet. Click field bet icon to place another bet!"
        //             clearField ()
        //         }
        // }
    
        if (bankroll === 0) {
            
            setTimeout(gameOver, 2000)  
              
        }

        
        

        

    
    })

    
    

   


    