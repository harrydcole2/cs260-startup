let deck = [];
let dealerHand = [];
let playerHand = [];
let topOfDeck = 5;
let cardsInHand = 2;
let ifStand = false;

function createDeck() {
  let suits = ["\u2665", "\u2666", "\u2663", "\u2660"];
  let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = {
        suit: suits[i],
        rank: ranks[j],
        value: values[j]
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function dealCards() {
  dealerHand = [deck[0], deck[2]];
  playerHand = [deck[1], deck[3]];
  console.log("Dealer's hand:")
  console.log(dealerHand);
  console.log("Player's hand:")
  console.log(playerHand);
}

function outputHands(){
  let firstCard = document.createTextNode("?");
  let card = document.getElementById("dealerFirstCard");
  card.appendChild(firstCard);
  let secondCard = document.createTextNode(dealerHand[1].rank + dealerHand[1].suit);
  card = document.getElementById("dealerSecondCard");
  card.appendChild(secondCard);
  firstCard = document.createTextNode(playerHand[0].rank + playerHand[0].suit);
  card = document.getElementById("playerFirstCard");
  card.appendChild(firstCard);
  firstCard = document.createTextNode(playerHand[1].rank + playerHand[1].suit);
  card = document.getElementById("playerSecondCard");
  card.appendChild(firstCard);
}

function playerTotal(){
  let temp = 0;
  for(let i = 0; i < playerHand.length; i++){
    temp += playerHand[i].value;
  }
  return temp;
}

function dealerTotal(){
  let temp = 0;
  for(let i = 0; i < dealerHand.length; i++){
    temp += dealerHand[i].value;
  }
  return temp;
}

function addPlayerCard(){
  if(playerHand.length < 5 && !ifStand){
    const newCard = document.createElement("div");
    newCard.setAttribute("class", "card");
    if(playerHand.length === 2){
      newCard.setAttribute("id", "playerThirdCard");
    }
    else if(playerHand.length === 3){
      newCard.setAttribute("id", "playerFourthCard");
    }
    else if(playerHand.length === 4){
      newCard.setAttribute("id", "playerFifthCard");
    }
    const hand = document.getElementById("player-hand");
    hand.appendChild(newCard);
    playerHand[playerHand.length] = deck[topOfDeck];
    topOfDeck++;
    console.log("Dealer's hand:");
    console.log(dealerHand);
    console.log("Player's hand:");
    console.log(playerHand);
    const firstCard = document.createTextNode(playerHand[playerHand.length - 1].rank + playerHand[playerHand.length - 1].suit)
    let card = document.getElementById("playerThirdCard");
    if(playerHand.length === 4){
      card = document.getElementById("playerFourthCard");
    }
    if(playerHand.length === 5){
      card = document.getElementById("playerFifthCard")
    }
    card.appendChild(firstCard);
    if(playerTotal() > 21) stand();
    else if(playerTotal() === 21) stand();
  }
  else{
    stand();
  }
}

function addDealerCard() {
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  if(dealerHand.length === 2){
    newCard.setAttribute("id", "dealerThirdCard");
  }
  else if(dealerHand.length === 3){
    newCard.setAttribute("id", "dealerFourthCard");
  }
  else if(dealerHand.length === 4){
    newCard.setAttribute("id", "dealerFifthCard");
  }
  const hand = document.getElementById("dealer-hand");
  hand.appendChild(newCard);
  dealerHand[dealerHand.length] = deck[topOfDeck];
  topOfDeck++;

  const cardText = document.createTextNode(dealerHand[dealerHand.length - 1].rank + dealerHand[dealerHand.length - 1].suit)
  let card = document.getElementById("dealerThirdCard");
  if(dealerHand.length === 4){
    card = document.getElementById("dealerFourthCard");
  }
  if(dealerHand.length === 5){
    card = document.getElementById("dealerFifthCard")
  }
  card.appendChild(cardText);
}

function stand(){
  if(ifStand === false) {
    let first = document.querySelector("#dealerFirstCard");
    first.innerHTML = dealerHand[1].rank + dealerHand[1].suit;
  }
  ifStand = true;
  determineWinnings();
}

function determineWinnings() {
  if(playerTotal() > 21){
    lose();
  }
  else{
    while( dealerTotal() < 17) {
      addDealerCard();
    }

    if ( playerTotal() >= dealerTotal() || dealerTotal() > 21) {
      win();
    }
    else {
      lose();
    }
  }
}

function win() {
  setTimeout(() => {
    alert("You win!");
  }, 1000);
}

function lose() {
  setTimeout(() => {
    alert("You suck!");
  }, 1000);
}

function restart(){
  if(ifStand){
    shuffleDeck(deck);
    dealCards();   
    clearHand();
    outputHands();
    ifStand = false;
  }
}

function clearHand(){
  const dealerHand = document.querySelector("#dealer-hand")
  const playerHand = document.querySelector("#player-hand")

  while(dealerHand.firstChild){
    dealerHand.removeChild(dealerHand.firstChild);
  }
  while(playerHand.firstChild){
    playerHand.removeChild(playerHand.firstChild);
  }

  let newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.setAttribute("id", "dealerFirstCard");
  dealerHand.appendChild(newCard);
  newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.setAttribute("id", "dealerSecondCard");
  dealerHand.appendChild(newCard);

  newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.setAttribute("id", "playerFirstCard");
  playerHand.appendChild(newCard);
  newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.setAttribute("id", "playerSecondCard");
  playerHand.appendChild(newCard);

}

document.getElementById("hit-button").addEventListener('click', addPlayerCard);
document.getElementById("stand-button").addEventListener('click', stand);

function setUsername() {
  const playerNameEl = document.querySelector('.player-name');
  playerNameEl.textContent = this.getPlayerName();
}

function getPlayerName() {
  return localStorage.getItem('userName') ?? 'Mystery player';
}

createDeck();
shuffleDeck(deck);
dealCards();
outputHands();
setUsername();