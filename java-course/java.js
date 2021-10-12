

let firstcard = 6
let secondcard = 10
let sum = firstcard + secondcard
let HasBlackJack = false
let IsAlive = true
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

function startGame(){
    sumEL.textContent = "sum: " + sum
    cardsEL.textContent ="Cards: " + firstcard + " " + secondcard
    if (sum <= 20) {
        message = "do you want a new card?"
    } else if (sum === 21){
        message = "blackjack!"
        HasBlackJack = true
    } else {
        message = "you lose"
        IsAlive = false
    }
    messageEL.textContent = message
}
