
// create a loop with set interval that loops through my images and and makes it look like the dice is being rolled

let point = 0
let wagerAmount = 0
let gameEndState = false
let bankroll = 250
let fieldBet = 0
let any7 = 0 
let anyCraps = 0
let totalSideBets = 0
let placeBetAmount = 0
let placeBet4amount = 0
let placeBet5amount = 0
let placeBet6amount = 0
let placeBet8amount = 0
let placeBet9amount = 0
let placeBet10amount = 0



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

function clearPlace () {
    placeBet4amount = 0
    placebet4amountDis.innerText = "Bet on 4: " + placeBet4amount
    placeBetAmount = 0
    h4.innerText = "Press a Place Bet Icon and then choose wager amount to add a place bet."
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


function reset () {
   
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



function placeBetMenu () {
    
    let h4 = document.createElement ("h4")
    h4.innerText = "Press a Place Bet Icon and then choose wager amount to add a place bet."
    placeBetsMessage.appendChild(h4)
    


    function wagerMoreThanRollP4(wager) {
        if (wager > bankroll - (wagerAmount + fieldBet + any7 + anyCraps + placeBet4amount + placeBet5amount + placeBet6amount + placeBet8amount + placeBet9amount + placeBet10amount)) {
            placeBet4amount = placeBet4amount
            placebet4amountDis.innerText = "Bet on 4: " + placeBet4amount

                        
        } else {
            placeBet4amount = placeBet4amount + wager
            placeBetAmount = placeBetAmount + placeBet4amount
            placebet4amountDis.innerText = "Bet on 4: " + placeBet4amount
            h4.innerText = "Place Bet Amount: " + placeBetAmount
    
        }
    }
    
   
    
    let div4 = document.createElement("div")
    div4.classList.add("placebet-icons")
    
    let placeBet4 = document.createElement("img")
    placeBet4.src = "img/place4.png"
    div4.appendChild(placeBet4)

    

    let placeBet5 = document.createElement("img")
    placeBet5.src = "img/place5.png"
    div4.appendChild(placeBet5)

    let placeBet6 = document.createElement("img")
    placeBet6.src = "img/place6.png"
    div4.appendChild(placeBet6)

    let placeBet8 = document.createElement("img")
    placeBet8.src = "img/place8.png"
    div4.appendChild(placeBet8)

    let placeBet9 = document.createElement("img")
    placeBet9.src = "img/place9.png"
    div4.appendChild(placeBet9)

    let placeBet10 = document.createElement("img")
    placeBet10.src = "img/place10.png"
    div4.appendChild(placeBet10)


    placeBetsMessage.appendChild(div4)

   


let div5 = document.createElement("div")
    div5.classList.add("placebet-ind")
    let placebet4amountDis = document.createElement("h4")
    placebet4amountDis.innerText = "Bet on 4: "+ placeBet4amount
    div5.appendChild(placebet4amountDis)

    let placebet5amountDis = document.createElement("h4")
    placebet5amountDis.innerText = "Bet on 5: "+ placeBet5amount
    div5.appendChild(placebet5amountDis)
    
    let placebet6amountDis = document.createElement("h4")
    placebet6amountDis.innerText = "Bet on 6: "+ placeBet6amount
    div5.appendChild(placebet6amountDis)
    
    let placebet8amountDis = document.createElement("h4")
    placebet8amountDis.innerText = "Bet on 8: "+ placeBet8amount
    div5.appendChild(placebet8amountDis)
    
    let placebet9amountDis = document.createElement("h4")
    placebet9amountDis.innerText = "Bet on 9: "+ placeBet9amount
    div5.appendChild(placebet9amountDis)
    
    let placebet10amountDis = document.createElement("h4")
    placebet10amountDis.innerText = "Bet on 10: "+ placeBet10amount
    div5.appendChild(placebet10amountDis)

    placeBetsMessage.appendChild(div5)

    let div6 = document.createElement("div")
    div6.classList.add("placebet-chips")
    let placeBetChip1 = document.createElement("img")
    placeBetChip1.src = "img/1 chip.png"
    div6.appendChild(placeBetChip1)
    let placeBetChip5 = document.createElement("img")
    placeBetChip5.src = "img/5 chip.png"
    div6.appendChild(placeBetChip5)
    let placeBetChip10 = document.createElement("img")
    placeBetChip10.src = "img/10 chip.png"
    div6.appendChild(placeBetChip10)
    let placeBetChip25 = document.createElement("img")
    placeBetChip25.src = "img/25 chip.png"
    div6.appendChild(placeBetChip25)
    let placeBetChip50 = document.createElement("img")
    placeBetChip50.src = "img/50 chip.png"
    div6.appendChild(placeBetChip50)
    let placeBetChip100 = document.createElement("img")
    placeBetChip100.src = "img/100 chip.png"
    div6.appendChild(placeBetChip100)
    placeBetsMessage.appendChild(div6)

    placeBet4.addEventListener("click", function() {

  
        placeBetChip1.addEventListener("click", function(){
            wagerMoreThanRollP4(1)
        })
       
        placeBetChip5.addEventListener("click", function(){
            wagerMoreThanRollP4(5)
        })
        
        placeBetChip10.addEventListener("click", function(){
            wagerMoreThanRollP4(10)
        })

        
        placeBetChip25.addEventListener("click", function(){
            wagerMoreThanRollP4(25)
        })

       
        placeBetChip50.addEventListener("click", function(){
            wagerMoreThanRollP4(50)
        })

        
        placeBetChip100.addEventListener("click", function(){
            wagerMoreThanRollP4(100)
        })

        
  
        let clearButtPlace4 = document.createElement("button")
        clearButtPlace4.innerText = "Clear Place Bets"
        let blankDivPlace = document.querySelector(".blank-place")
        blankDivPlace.innerHTML=""
        blankDivPlace.appendChild(clearButtPlace4)

        clearButtPlace4.addEventListener("click", function(){
            
            placeBet4amount = 0
    placebet4amountDis.innerText = "Bet on 4: " + placeBet4amount
    placeBetAmount = 0
    h4.innerText = "Press a Place Bet Icon and then choose wager amount to add a place bet."
    console.log(placeBetAmount)


        })
    })
}




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
function wagerMoreThanRollF(wager) {
    console.log(fieldBet)
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


if (true){

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
}
let field = document.querySelector(".field")
field.addEventListener("click", function(){
    


      
    
    
      

        let clearButt = document.createElement("button")
        clearButt.innerText = "Clear Field bet"
        let blankDiv1 = document.querySelector(".blank-div")
        blankDiv1.innerHTML=""
        blankDiv1.appendChild(clearButt)

        clearButt.addEventListener("click", function(){
            clearField  ()
        
            


        })


    

})

///// any7 bet bar

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

if (true){
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
}

let any7pic = document.querySelector(".any7")
any7pic.addEventListener("click", function(){


      
    
  

       

        let clearButt2 = document.createElement("button")
        clearButt2.innerText = "Clear Any 7 bet"
        blankDiv2.innerHTML=""
        blankDiv2.appendChild(clearButt2)

        clearButt2.addEventListener("click", function(){
            clear7 ()


        })


    

})

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

if (true){
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
}

let anyCrapPic = document.querySelector(".anyCraps")
anyCrapPic.addEventListener("click", function(){


      
    
    

        

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

        
    
        if (bankroll === 0) {
            
            setTimeout(gameOver, 2000)  
              
        }

        
        

        

    
    })

    
    

   


    