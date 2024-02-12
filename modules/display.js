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
  // const health = document.querySelector('#health');
  const divHealth = document.createElement('div');
  divHealth.classList.add('health');

  const healthBorderDiv = document.createElement('div');
  healthBorderDiv.classList.add('healthborder');

  const healthbarDiv = document.createElement('div');
  healthbarDiv.id = 'currentHealth';
  healthbarDiv.classList.add('healthbar');
  // healthbarDiv.innerText = this.currentHealth;

  const healthInfoDiv = document.createElement('div');
  healthInfoDiv.classList.add('healthInfo');


  const healthspan1 = document.createElement('span');
  const healthspan2 = document.createElement('span');
  healthspan2.id = 'maxHealth';

  healthspan1.innerText = 'Health';
  // healthspan2.innerText = this.#maxHealth; 

  divHealth.append(healthBorderDiv, healthInfoDiv);
  healthBorderDiv.append(healthbarDiv);
  // healthbarDiv.append(healthInfoDiv);
  healthInfoDiv.append(healthspan1, healthspan2);

  return divHealth;

}

/*******************************
    Builds fighter interface
 *****************************/

export function displayFigher(fighterType, playerName){
  // const playerCard1 = document.querySelector('#playerCard1'); //Används ej än

  const playerHeader1Container = document.querySelector('#playerHeader1');
  const playerNameOneDiv = document.querySelector('#playerNameOne');
  const namesPlayerAndFighter = document.createElement('h3');
  
  const healthElement = createHealthElement(); //DivHealth som returneras 
  const fighterChoice = createFighter(fighterType); // får returnen m info om val av fighter

  const fighterChoiceName = fighterChoice.getName(); //Hämtar fighternamnet från klassen
  namesPlayerAndFighter.innerText = `${playerName} as ${fighterChoiceName}`;
  
  const maxHealthElement = healthElement.querySelector("#maxHealth");
  maxHealthElement.innerText = fighterChoice.getMaxHealth(); //denna hämtar metoden getMaxHealth från klassen fighter

  playerHeader1Container.append(healthElement); //Den andra diven är redan där så behöver ej appendas
  playerNameOneDiv.append(namesPlayerAndFighter);

  const playerName1Namn = document.createElement('h3');

  playerName1Namn.innerText = `${playerName} as ${fighterType} `;
  // playerHeader2.innerText = `${playerName2} as ${fighterType2} `;

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