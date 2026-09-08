let playerEl={
    name:"Mike",
    chips:0
}
let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let info=document.getElementById("info")
let sumT=document.getElementById("sum")
let cardT=document.getElementById("card")
let player=document.getElementById("player")

player.textContent=`${playerEl.name}: $${playerEl.chips}`
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber===1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber
    }
}
function startGame(){
    isAlive=true
    hasBlackJack=false
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
    info.style.color="#F2F4F4"
    cardT.textContent=`${cards}`;
    sumT.textContent=`Sum: ${sum}`
    if (sum<21){
    message="Do you want to draw a new card?"
    }
    else if (sum===21){
        message="You've got Blackjack! "
        info.style.color="darkBlue"
        hasBlackJack=true
        playerEl.chips+=200
        player.textContent=`${playerEl.name}: $${playerEl.chips}`
        cashoutSound.currentTime = 0; 
    
        // Play the audio
        cashoutSound.play().catch(error => {
            console.log("Error playing audio:", error);
        });
        }
    else {
        message="You're out of the game! "
        info.style.color="red"
        isAlive=false
        faah.currentTime = 0; 
    
        // Play the audio
        faah.play().catch(error => {
            console.log("Error playing audio:", error);
        });
    }
    info.textContent=message;
}

function newCard(){
    if(isAlive && hasBlackJack ===false){
        let card=getRandomCard();
        sum+=card;
        cards.push(card)
        renderGame();
    }
    
}


const cashoutBtn = document.getElementById("cashoutBtn");
const cashoutSound = document.getElementById("cashoutSound");
const faah = document.getElementById("faah");


cashoutBtn.addEventListener("click", e=> {
    playerEl.chips=0
    player.textContent=`${playerEl.name}: $${playerEl.chips}`
    // Reset to the start so it can play again if clicked rapidly
    // cashoutSound.currentTime = 0; 
    
    // // Play the audio
    // cashoutSound.play().catch(error => {
    //     console.log("Error playing audio:", error);
    // });
    
});
