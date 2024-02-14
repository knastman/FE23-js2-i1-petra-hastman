// import { FighterType} from "./fighterType.js";
import { FighterKunimitsu, FighterZangief} from "./fighterType.js";
import { createHealthElement} from "./attacks.js";
// import {Attack} from "./fighter.js";
// console.log(Attack);

const playersContainer = document.querySelector('#playersContainer');
const imgBaseUrl = './img/';

const newGameBtnDiv = document.querySelector('.newGameBtnDiv');
const newGameButton = document.querySelector('#newGameButton');


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

export async function displayFigher(fighterType, playerName, fighterContainerIndex){
  fighterChoice = createFighter(fighterType); 

  const playerCard = document.createElement('section'); 
  playerCard.classList.add('playerCard');

  const playerHeaderContainer= createFighterHeader(fighterChoice, playerName); 
  const healthElement = createHealthElement(fighterChoice); 
  const fighterImgAndActionsContainer = document.createElement('div');
  const actionContainer = createActionButtons(fighterChoice);
  const imgElement = createFighterImg(fighterChoice);

  fighterImgAndActionsContainer.classList.add('playerInfo');
  if (fighterContainerIndex == 2) {
    fighterImgAndActionsContainer.classList.add('actioncontainerRight');
  }
 
  //KO ELEMENT******************
  // const KOElement = displayKO(fighterChoice);

  // const KOElement = document.createElement('div');
  // playerCard.append(KOElement);
  // KOElement.innerText="KO";
  // KOElement.classList.add('ko');

  /************** All appends ******/
  playersContainer.append(playerCard);
  playerCard.append(playerHeaderContainer, fighterImgAndActionsContainer);
  playerHeaderContainer.append(healthElement);
  fighterImgAndActionsContainer.append(actionContainer, imgElement); 
  if (fighterCurrentHealth == 0){
    const KOElement = displayKO(fighterChoice, playerCard);
    imgElement.append(KOElement); //Den ska appendas när ngn förlorat och klasserna måste aktiveras  
  }


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
  // imgContainer.innerHTML = `<img src=${imgBaseUrl}${attackImg}  alt= ${fighterChoiceName} />`;
  // console.log('clara loggar', attack.getAttackName());
  // console.log(`${attack.attackName}, ${attack.attackDamage}`);

  
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

export function displayKO(fighterChoiceName, playerCard){
  const KOElement = document.createElement('div');
  KOElement.innerText="KO";
  KOElement.classList.add('ko');
  playerCard.classList.add('fighterLost');
  playerCard.classList.add('fighterLost-wrapper');
  playerCard.setAttribute('id', 'fightOver'); //olika id på sections
  // KOElement.classList.add('fighterLost');
  // KOElement.classList.add('container__icon-wrapper');
  // KOElement.classList.add('hide');

  return KOElement;
}


//FUnkar EJ (ville göra det synligare vems tur det är)
// export function opacityForDisabled(element, fighterchoice){
//   element.classList.add('opacity');
// }


/****************** Display Healthbar and maxhealth *******************/ 

//JUST NU I ATTACKS.js för test

//  function createHealthElement(){
//   const divHealth = document.createElement('div');
//   divHealth.classList.add('health');

//   const healthBorderDiv = document.createElement('div');
//   healthBorderDiv.classList.add('healthBorder');

//   const healthbarDiv = document.createElement('div');
//   healthbarDiv.id = 'currentHealth';
//   healthbarDiv.classList.add('healthbar');
//   // healthbarDiv.innerText = this.currentHealth;
//   healthbarDiv.innerText = '370'; //Detta ska hämtas från metoden när den finns

//   const healthInfoDiv = document.createElement('div');
//   healthInfoDiv.classList.add('healthInfo');

//   const healthspan1 = document.createElement('span');
//   const healthspan2 = document.createElement('span');
//   healthspan2.id = 'maxHealth';

//   healthspan1.innerText = 'Health';

//   divHealth.append(healthBorderDiv, healthInfoDiv);
//   healthBorderDiv.append(healthbarDiv);
//   healthInfoDiv.append(healthspan1, healthspan2);

//   return divHealth;
// }













  // const playerHeaderContainer = document.querySelector('#playerHeader');
  // const namesPlayerAndFighter = document.querySelector('.playerNames');
  // const actionContainer = document.querySelector('.actionContainer');
  // const fighterImgAndActionsContainer = document.querySelector('.playerInfo');

// export {displayPlayerInfo}



/********************* GAMMALT OCH TESTER OSV *************/
 
  // playerCard.setAttribute('id', fighterContainerIndex); //olika id på sections


// function createAndAppendElement(type, content, container){
//     const element = document.createElement(type);
//     container.append(element);
//     if(type === 'img'){
//       element.src = content;
//     } 
//     else {
//       element.innerText = content;
//     }
//     return element;
// }

// function displayPlayerInfo(playerInfo, container){
//     createAndAppendElement('h3', playerInfo, container);
// }

// export function displayFigher(fighterType, playerName){

//   const playerHeader = document.createElement('h3');
//   playerOneContainer.append(playerHeader);
//   playerHeader.innerText = `${playerName} as ${fighterType} `;

//   // for(const prop in fighterType){
//   //   console.log(prop, fighterType[prop]);  
//   // }
//   // for(const prop in Kunimitsu){
//   //   console.log(prop, Kunimitsu[prop]);  
//   // }

// }





  // playerHeader2.innerText = `${playerName2} as ${fighterType2} `;
  
  //HUr hämtar jag in objectet och dess info här
  // console.log(`${fighter1.getName()} have ${fighter1.getMaxHealth()} in maxhealth`);





  /******* ActionContainer ******/
  //------------------Hur hämtar man ut varje action för sig?--------------
 
  // const actionContainer = createActionElements();//från FUNCTION
  // const attacks = fighterChoice.getAttacks(); //Listar attacknamn och attackdamage 

  // const attackName = fighterChoice.getAttackName(); //Funkar ej
  // console.log('attackName');
  // console.log(attackName);


  // actionContainer.classList.add('actionContainer');
  // const fighterAttacks = fighterChoice.getAttacks();
  // console.log(fighterAttacks);
  // actionContainer.innerText = fighterAttacks; //Detta blir bara [object], [object]

//  Tillfälligt
  // actionContainer.innerHTML = ` 
  // <h3>Actions</h3>
  // <div>
  //   <button class="kunimitsuButton" data-attack-name="blizzard combo" data-attack-damage="40" id="blizzard">
  //     <img src="./img/icons/hurricane.png" alt="">Blizzard Combo
  //   </button>
  // </div>
  // <div>
  //   <button class="kunimitsuButton" data-attack-name="explosive jab" data-attack-damage="25" id="explosiveJab">
  //     <img src="./img/icons/explosion.png" alt="">Explosive jab
  //   </button>
  // </div>            
  // <div>
  //   <button class="kunimitsuButton" data-attack-name="shuriken throw" data-attack-damage="85" id="shurikenThrow">
  //     <img src="./img/icons/shuriken2.png" alt="">Shuriken Throw
  //   </button>
  // </div>
  // <div>
  //   <button class="kunimitsuButton" data-attack-name="twisted limbs" data-attack-damage="205" id="twistedLimbs">
  //     <img src="./img/icons/flash.png" alt="">Twisted Limbs
  //   </button>
  // </div>`;

  // const maxHealthElement = healthElement.querySelector("#maxHealth");
  // const fighterMaxHealth = fighterChoice.getMaxHealth();//FRÅN CLASSEN 
  // maxHealthElement.innerText =  `MAX ${fighterMaxHealth}`; //FRÅN CLASSEN 
  // maxHealthElement.innerText = fighterChoice.getMaxHealth();


    // for(const attack of fighterChoice.getAttacks()){
  //   // const actionElement =  document.createElement('h5');
  //   const actionButton =  document.createElement('button');
  //   const imgContainer = document.createElement('div');
  //   const attackName = document.createElement('span');
  //   const attackImgElement =  document.createElement('img');
  //   actionButton.classList.add(`${fighterChoiceName}button`);
  //   actionButton.setAttribute("data-attack-name", `${attack.attackName}`); 
  //   actionButton.setAttribute("id", `${attack.attackName}`); 
  //   actionButton.setAttribute("data-attack-damage", `${attack.attackDamage}`); 
  //   attackName.innerText = attack.attackName;

  //   /******* ButtonImage ******/
  //   const fighterImgUrl = attack.attackImgUrl;
  //   attackImgElement.src = `${imgBaseUrl}/icons/${fighterImgUrl}`;
  //   // imgContainer.innerHTML = `<img src=${imgBaseUrl}${attackImg}  alt= ${fighterChoiceName} />`;
  //   // console.log('clara loggar', attack.getAttackName());
  //   // console.log(`${attack.attackName}, ${attack.attackDamage}`);

  //   actionContainer.append(imgContainer); 
  //   imgContainer.append(actionButton); 
  //   actionButton.append(attackImgElement,attackName); 

  // }