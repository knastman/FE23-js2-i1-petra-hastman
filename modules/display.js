// import { FighterType} from "./fighterType.js";
import { FighterKunimitsu, FighterZangief} from "./fighterType.js";
// import {Attack} from "./fighter.js";
// console.log(Attack);

const playersContainer = document.querySelector('#playersContainer');
const imgBaseUrl = './img/';



 //Test att hämta fightertype som jag kan använda i flera funktioner - funkar ej
 export function fighterChoice(fighterType){
  // const fighterChoiceTest = createFighter(fighterType); 
  // console.log('fighterType i fighterchocefunktionen');
  // console.log(fighterChoiceTest);
  // return fighterChoiceTest;
  return createFighter(fighterType);
 }

/*************************************
 Choice of player from form, get fightertype info from class
 **************************************/

function createFighter(name) {
  if (name === "Kunimitsu") {
    const fighterTypeKunimitsu = new FighterKunimitsu();
    console.log('fighterTypeKunimitsu');
    console.log(fighterTypeKunimitsu);
    return fighterTypeKunimitsu;
  }
  else if (name === "Zangief") {
    return new FighterZangief();
  }
  return null;
}


/******************************
    Builds parts of interface
 ******************************


 /****************** Display Healthbar and maxhealth *******************/ 

function createHealthElement(){
  const divHealth = document.createElement('div');
  divHealth.classList.add('health');

  const healthBorderDiv = document.createElement('div');
  healthBorderDiv.classList.add('healthBorder');

  const healthbarDiv = document.createElement('div');
  healthbarDiv.id = 'currentHealth';
  healthbarDiv.classList.add('healthbar');
  // healthbarDiv.innerText = this.currentHealth;
  healthbarDiv.innerText = '370'; //Detta ska hämtas från metoden när den finns

  const healthInfoDiv = document.createElement('div');
  healthInfoDiv.classList.add('healthInfo');

  const healthspan1 = document.createElement('span');
  const healthspan2 = document.createElement('span');
  healthspan2.id = 'maxHealth';

  healthspan1.innerText = 'Health';

  divHealth.append(healthBorderDiv, healthInfoDiv);
  healthBorderDiv.append(healthbarDiv);
  healthInfoDiv.append(healthspan1, healthspan2);

  return divHealth;
}


 /****************** Display fighterImg *******************/ 

  //Troligen onödig om det inte går att hämta info från classen 
 function createFighterImgElement(){
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('playerImg');
  // const fighterImg = document.createElement('img');
  // imgContainer.append(fighterImg);

  return imgContainer;
 }


 /****************** Display Actions *******************/  

 function createActionContainer (){
  console.log('Creates actioncontainer and actions');
 }


 /**********************************
    Builds fighter interface
 *****************************/

export function displayFigher(fighterType, playerName, fighterContainerIndex){

  const fighterChoice = createFighter(fighterType); //Vilken fighter man valt (från funct) - innehåller all info om fightertypens klass
  // console.log(fighterChoice);
  // console.log(fighterContainerIndex);

  const playerCard = document.createElement('section'); 
  playerCard.classList.add('playerCard');

  /******* Playercard Header ******/
  const playerHeaderContainer = document.createElement('div');
  playerHeaderContainer.classList.add('playerHeader');
  playerHeaderContainer.setAttribute("id", 'playerHeader');


  const namesPlayerAndFighter = document.createElement('h3');
  namesPlayerAndFighter.classList.add('playerNames');

  const fighterChoiceName = fighterChoice.getName(); 
  namesPlayerAndFighter.innerText = `${playerName} as ${fighterChoiceName}`;

  /******* Fighter Health ******/
  const healthElement = createHealthElement(); //Hela diven class "health" (från funct)
  const maxHealthElement = healthElement.querySelector("#maxHealth");
  const fighterMaxHealth = fighterChoice.getMaxHealth();
  maxHealthElement.innerText =  `MAX ${fighterMaxHealth}`; 
  // maxHealthElement.innerText = fighterChoice.getMaxHealth();


  const fighterImgAndActionsContainer = document.createElement('div');
  fighterImgAndActionsContainer.classList.add('playerInfo');
  if (fighterContainerIndex == 2) {
    fighterImgAndActionsContainer.classList.add('actioncontainerRight');
  }
  
  /******* Image ******/
  const fighterImgUrl = fighterChoice.getImgUrl();
  const imgContainer = createFighterImgElement();
  imgContainer.innerHTML = `<img src=${imgBaseUrl}${fighterImgUrl}  alt= ${fighterChoiceName} />`;


  /******* ActionContainer ******/
  //------------------Hur hämtar man ut varje action för sig?--------------
 
  // const actionContainer = createActionElements();
  // const attacks = fighterChoice.getAttacks(); //Listar attacknamn och attackdamage
  // const attackName = fighterChoice.getAttackName(); //Funkar ej
  // console.log('attackName');
  // console.log(attackName);

  const actionContainer =  document.createElement('div');
  actionContainer.classList.add('actionContainer');
  const fighterAttacks = fighterChoice.getAttacks();
  console.log(fighterAttacks);
  // actionContainer.innerText = fighterAttacks; //Detta blir bara [object], [object]

//  Tillfälligt
  actionContainer.innerHTML = ` 
  <h3>Actions</h3>
  <div>
    <button class="kunimitsuButton" data-attack-name="blizzard combo" data-attack-damage="40" id="blizzard">
      <img src="./img/icons/hurricane.png" alt="">Blizzard Combo
    </button>
  </div>
  <div>
    <button class="kunimitsuButton" data-attack-name="explosive jab" data-attack-damage="25" id="explosiveJab">
      <img src="./img/icons/explosion.png" alt="">Explosive jab
    </button>
  </div>            
  <div>
    <button class="kunimitsuButton" data-attack-name="shuriken throw" data-attack-damage="85" id="shurikenThrow">
      <img src="./img/icons/shuriken2.png" alt="">Shuriken Throw
    </button>
  </div>
  <div>
    <button class="kunimitsuButton" data-attack-name="twisted limbs" data-attack-damage="205" id="twistedLimbs">
      <img src="./img/icons/flash.png" alt="">Twisted Limbs
    </button>
  </div>`;

 
  /************** All appends ******/
  playersContainer.append(playerCard);
  playerCard.append(playerHeaderContainer, fighterImgAndActionsContainer);
  playerHeaderContainer.append(namesPlayerAndFighter, healthElement);
  fighterImgAndActionsContainer.append(actionContainer, imgContainer); 

}



  // const playerHeaderContainer = document.querySelector('#playerHeader');
  // const namesPlayerAndFighter = document.querySelector('.playerNames');
  // const actionContainer = document.querySelector('.actionContainer');
  // const fighterImgAndActionsContainer = document.querySelector('.playerInfo');

// export {displayPlayerInfo}



/********************* GAMMALT OCH TESTER OSV *************/


  // const playerCard = document.createElement('section');
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

