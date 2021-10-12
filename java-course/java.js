

let firstcard = 6
let secondcard = 10
let sum = firstcard + secondcard
let HasBlackJack = false
let IsAlive = true
let message = ""
let messageEL = document.getElementById("message-el")

function startGame(){
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
