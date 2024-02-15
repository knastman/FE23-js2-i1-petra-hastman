// import { FighterType} from "./fighterType.js";
import { FighterKunimitsu, FighterZangief} from "./fighterType.js";
// import { createHealthElement} from "./attacks.js";
// import {Attack} from "./fighter.js";
// console.log(Attack);

const playersContainer = document.querySelector('#playersContainer');
const messageContainer = document.querySelector('#messageContainer');
const imgBaseUrl = './img/';

const newGameBtnDiv = document.querySelector('.newGameBtnDiv');
const newGameButton = document.querySelector('#newGameButton');
const newGButton = document.querySelector('.newGame');

let playerCard1 = '';
let playerCard2 = '';
let healtbarfill1 = '';
let healtbarfill2 = '';


/*************************************
 Choice of player from form, get fightertype info from class
 **************************************/

export function createFighter(name) {
  if (name === "Kunimitsu") {
    const fighterTypeKunimitsu = new FighterKunimitsu();
    // console.log('fighterTypeKunimitsu');
    // console.log(fighterTypeKunimitsu);
    return fighterTypeKunimitsu;
  }
  else if (name === "Zangief") {
    return new FighterZangief();
  }
  return null;
}


/**********************************
  Builds fighter interface
*****************************/

let fighterChoice = '';
let playerName = '';
let playerCard = ''; 


// displayFighterMessage('The game can start!  Choose attack');

export function displayFighterMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('fightingMessage');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}

export async function displayFigher(fighterType, playerName, fighterContainerIndex){
  fighterChoice = createFighter(fighterType); 

  playerCard = document.createElement('section'); 
  playerCard.classList.add('playerCard');

  messageContainer.innerHTML = `<h2>The game can start!  Choose attack</h2>`;

  const playerHeaderContainer= createFighterHeader(fighterChoice, playerName); 
  const healthElement = createHealthElement(fighterChoice); 
  const fighterImgAndActionsContainer = document.createElement('div');
  const actionContainer = createActionButtons(fighterChoice);
  const imgElement = createFighterImg(fighterChoice);

  fighterImgAndActionsContainer.classList.add('playerInfo');
  if (fighterContainerIndex == 2) {
    fighterImgAndActionsContainer.classList.add('actioncontainerRight');
    playerCard.classList.add('player2');
  }
  else if((fighterContainerIndex == 1)){
    playerCard.classList.add('player1');

  }

  /************** Appends ******/
  playersContainer.append(playerCard);
  playerCard.append(playerHeaderContainer, fighterImgAndActionsContainer);
  playerHeaderContainer.append(healthElement);
  fighterImgAndActionsContainer.append(actionContainer, imgElement); 

}

/******************************
  Builds parts of interface
******************************/


function createFighterHeader(fighterchoice, playerName){
  const playerHeaderContainer = document.createElement('div');
  playerHeaderContainer.classList.add('playerHeader');
  playerHeaderContainer.setAttribute("id", 'playerHeader');

  // const namesPlayerAndFighter = document.createElement('h3');
  // namesPlayerAndFighter.classList.add('playerNames');

  const fighterChoiceName = fighterChoice.getName(); 
  playerHeaderContainer.innerHTML = `<h3>${playerName} as ${fighterChoiceName}</h3>`;
  return playerHeaderContainer;
}

function createActionButtons(fighterchoice){

const fighterChoiceName = fighterChoice.getName(); 

const actionContainer =  document.createElement('div');
actionContainer.classList.add('actionContainer');

for(const attack of fighterChoice.getAttacks()){
  // const actionElement =  document.createElement('h5');
  const actionButton =  document.createElement('button');
  const imgContainer = document.createElement('div');
  const attackName = document.createElement('span');
  const attackImgElement =  document.createElement('img');
  actionButton.classList.add(`${fighterChoiceName}button`);
  actionButton.setAttribute("data-attack-name", `${attack.attackName}`); 
  actionButton.setAttribute("id", `${attack.attackName}`); 
  actionButton.setAttribute("data-attack-damage", `${attack.attackDamage}`); 
  attackName.innerText = attack.attackName;

  /******* ButtonImage ******/
  const fighterImgUrl = attack.attackImgUrl;
  attackImgElement.src = `${imgBaseUrl}/icons/${fighterImgUrl}`;


  
  actionContainer.append(imgContainer); 
  imgContainer.append(actionButton); 
  actionButton.append(attackImgElement,attackName); 

}
return actionContainer;
}

function createFighterImg(fighterchoice){
  const fighterImgUrl = fighterChoice.getImgUrl();
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('playerImg');
  imgContainer.innerHTML = `<img src=${imgBaseUrl}${fighterImgUrl} />`;
  return imgContainer ;
}


function createHealthElement(fighterChoice){

  const MaxHealth = fighterChoice.getMaxHealth(); 

  const divHealth = document.createElement('div');
  divHealth.classList.add('health');

  const healthbarDiv = document.createElement('div');
  healthbarDiv.id = 'currentHealth';
  healthbarDiv.classList.add('healthbar');
  const maxHealth = fighterChoice.getMaxHealth(); 
  healthbarDiv.innerText = maxHealth;

  const healhthbarContainer = document.createElement('div');
  const healhthbarFill = document.createElement('div');
  healhthbarContainer.classList.add('healhthbarContainer');
  healhthbarFill.classList.add('healhthbarFill');
  healhthbarFill.setAttribute('style', 'width:100%');  //Här ska width= currenthealth, fast i procent på ngt sätt
  healhthbarFill.innerText = `${MaxHealth}`; 

  /******** */
  const healthInfoDiv = document.createElement('div');
  healthInfoDiv.classList.add('healthInfo');

  const healthspan1 = document.createElement('span');
  const healthspan2 = document.createElement('span');
  healthspan2.id = 'maxHealth';

  healthspan1.innerText = 'Health';

  divHealth.append(healhthbarContainer, healthInfoDiv);
  healhthbarContainer.append(healhthbarFill);

  // divHealth.append(healthBorderDiv, healthInfoDiv);
  // healthBorderDiv.append(healthbarDiv);
  healthInfoDiv.append(healthspan1, healthspan2);

  // const maxHealthElement = healthElement.querySelector("#maxHealth");
  const fighterMaxHealth = fighterChoice.getMaxHealth();//FRÅN CLASSEN 
  healthspan2.innerText =  `MAX ${fighterMaxHealth}`; //FRÅN CLASSEN 

  return divHealth;
  }



export function displayHealthBar(currentHealthfighter, fighter, fighterChoiceName){

  playerCard1 = document.querySelector('.player1');
  playerCard2 = document.querySelector('.player2');

  const healhthbarFill1 = document.querySelector('.player1 .healhthbarFill');
  const healhthbarFill2 = document.querySelector('.player2 .healhthbarFill');
  
  let currentHealthfighter1 = '';
  let currentHealthfighter2 = '';
  
  if (fighter =='1'){
    console.log(fighterChoiceName);
    console.log('fighterChoiceName');
    currentHealthfighter1 = currentHealthfighter;
    healhthbarFill1.innerText = `${currentHealthfighter1}`; 
    if (fighterChoiceName == 'Zangief'){
      let currentHealthfighterPercent1 = currentHealthfighter1/2; 
      healhthbarFill2.setAttribute('style', `width:${currentHealthfighterPercent1}%`);
    }
    else
      healhthbarFill1.setAttribute('style', `width:${currentHealthfighter1}%`);
    }
  else if(fighter =='2'){
    console.log('fighterChoiceName');
    console.log(fighterChoiceName);
    currentHealthfighter2 = currentHealthfighter;
    healhthbarFill2.innerText = `${currentHealthfighter2}`; 
    if (fighterChoiceName == 'Zangief'){
      let currentHealthfighterPercent2 = currentHealthfighter2/2; 
      healhthbarFill2.setAttribute('style', `width:${currentHealthfighterPercent2}%`); 
    }
    else {
      healhthbarFill2.setAttribute('style', `width:${currentHealthfighter2}%`);
    }
  }  

}


export function displayKO(playerCardNr){
  const imgElement = document.querySelector('.playerImg');
  const playerCard1 = document.querySelector('.player1');
  const playerCard2 = document.querySelector('.player2');

  const KOElement = document.createElement('div');
  KOElement.innerText="KO";
  KOElement.classList.add('ko');
  const WINelement = document.createElement('div');
  WINelement.innerText="WINNER";
  WINelement.classList.add('fighterWon');

  if (playerCardNr == 1){
    playerCard1.classList.add('fighterLost');
    playerCard1.classList.add('fighterLost-wrapper');
    playerCard1.setAttribute('id', 'fightOver'); 
    playerCard1.append(KOElement);
    playerCard2.append(WINelement);
  }
  else if (playerCardNr == 2){
    playerCard2.classList.add('fighterLost');
    playerCard2.classList.add('fighterLost-wrapper');
    playerCard2.setAttribute('id', 'fightOver'); 
    playerCard2.append(KOElement);
    playerCard1.append(WINelement);
  }

  newGButton.classList.remove("hide"); 
  messageContainer.classList.add("hide"); 
  return KOElement;
}


// // FUnkar EJ (ville göra det synligare vems tur det är)
// export function opacityForDisabled(element, fighterchoice){
//   element.classList.add('opacity');
// }



// //Behövs ej längre, hämtas i healthbar
// export function displayCurrentHealthValue(currentHealthfighter, fighter){
//   console.log('currentHealthfighter');
//   console.log(currentHealthfighter);
//   console.log('fighter');
//   console.log(fighter);
//   let currentHealthfighter1 = '';
//   let currentHealthfighter2 = '';
  
//     if (fighter =='1'){
//       currentHealthfighter1 = currentHealthfighter;
//       console.log(`Nuvarande hälsa fighter 1 ${currentHealthfighter1}`);
//     }
//     else if(fighter =='2'){
//       currentHealthfighter2 = currentHealthfighter;
//       console.log(`Nuvarande hälsa fighter 2 ${currentHealthfighter2}`);
//     }
  
//   }  

