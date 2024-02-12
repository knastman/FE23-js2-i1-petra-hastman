// import { FighterType} from "./fighterType.js";
import { FighterKunimitsu, FighterZangief} from "./fighterType.js";

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

/**************************
 Choice of player from form
 ***************************/
function createFighter(name) {
  if (name === "Kunimitsu") {
    return new FighterKunimitsu();
  }
  else if (name === "Zangief") {
    return new FighterZangief();
  }
  return null;
}


/******************************
    Builds parts of interface
 ******************************


  HEALTH PART
 ***************************/  

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
  // healthspan2.innerText = this.#maxHealth; //Innan klassen gjordes om så funkade detta.

  divHealth.append(healthBorderDiv, healthInfoDiv);
  healthBorderDiv.append(healthbarDiv);
  healthInfoDiv.append(healthspan1, healthspan2);

  return divHealth;
}

/*******************************
    Builds fighter interface
 *****************************/

export function displayFigher(fighterType, playerName){
  // const playerCard1 = document.querySelector('#playerCard1'); //Används ej än
  const fighterChoice = createFighter(fighterType); //Vilken fighter man valt (från funct)

  const playerHeaderContainer = document.querySelector('#playerHeader');
  const playerNameDiv = document.querySelector('#playerNameOne');
  const namesPlayerAndFighter = document.createElement('h3');
  
  const fighterChoiceName = fighterChoice.getName(); //Hämtar fighternamnet från subklassen Kunumitsu

  const healthElement = createHealthElement(); //Hela diven class "health" (från funct)

  const maxHealthElement = healthElement.querySelector("#maxHealth");
  const fighterMaxHealth = fighterChoice.getMaxHealth();//Hämtar metoden från klassen fighter

  namesPlayerAndFighter.innerText = `${playerName} as ${fighterChoiceName}`;
  maxHealthElement.innerText =  `MAX ${fighterMaxHealth}`; 
  // maxHealthElement.innerText = fighterChoice.getMaxHealth();

  
  // playerHeader2.innerText = `${playerName2} as ${fighterType2} `;


  playerHeaderContainer.append(healthElement); 
  playerNameDiv.append(namesPlayerAndFighter);



  

  //HUr hämtar jag in objectet och dess info här
  // console.log(`${fighter1.getName()} have ${fighter1.getMaxHealth()} in maxhealth`);

}

// export {displayPlayerInfo}





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