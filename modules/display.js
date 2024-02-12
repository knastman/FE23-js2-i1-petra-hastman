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


function createFighter(name) {
  if (name === "Kunimitsu") {
    return new FighterKunimitsu();
  }
  else if (name === "Zangief") {
    return new FighterZangief();
  }

  return null;
}


function createHealthElement(){
  // const health = document.querySelector('#health');
  const divHealth = document.createElement('div');
  divHealth.classList.add('health');

  const healthBorderDiv = document.createElement('div');
  healthBorderDiv.classList.add('healthborder');

  const healthInfoDiv = document.createElement('div');
  healthInfoDiv.classList.add('healthInfo');

  const healthbarDiv = document.createElement('div');
  healthbarDiv.id = 'currentHealth';
  healthBorderDiv.classList.add('healthbar');
  // healthbarDiv.innerText = this.currentHealth;

  const healthspan1 = document.createElement('span');
  const healthspan2 = document.createElement('span');
  healthspan2.id = 'maxHealth';

  healthspan1.innerText = 'Health';
  // healthspan2.innerText = this.#maxHealth; 

  divHealth.append(healthBorderDiv, healthInfoDiv);
  healthBorderDiv.append(healthbarDiv);
  healthbarDiv.append(healthInfoDiv);
  healthInfoDiv.append(healthspan1, healthspan2);



  return divHealth;


}


export function displayFighers(fighterType1, playerName1, fighterType2, playerName2){
  const playerCard1 = document.querySelector('#playerCard1');
  const playerCard2 = document.querySelector('#playerCard2');

  const playerHeader1 = document.querySelector('#playerHeader1');
  const playerHeader2 = document.querySelector('#playerHeader2');


  const playerNameOne = document.querySelector('#playerNameOne');
  const playerNameTwo = document.querySelector('#playerNameTwo');
  
  const healthElement1 = createHealthElement(); //denna är divHealth som returneras 
  const fighterChoice1 = createFighter(fighterType1); //hämtar det functionencreateFighter returnerar.
  
  const maxHealthElement = healthElement1.querySelector("#maxHealth");
  maxHealthElement.innerText = fighterChoice1.getMaxHealth(); //denna hämtar metoden getMaxHealth från klassen fighter

  // healthElement1.querySelector("#currentHealth") = fighterChoice1.get
  
  console.log('fighterChoice1');
  console.log(fighterChoice1);


  // const playerHeader2 = document.querySelector('.playerHeader');

  playerHeader1.append(playerNameOne, healthElement1);
  // playerHeader1.append(playerNameOne, fighterChoice1.displayHealth());
  // playerHeader1.append(fighterChoice1.displayHealth()); //diplayHealth 


  // playerNameOne.append(playerHeader1);
  // playerNameTwo.append(playerHeader2);


  const playerName1Namn = document.createElement('h3');
  // const playerHeader1 = document.createElement('h3');
  // const playerHeader2 = document.createElement('h3');

  playerName1Namn.innerText = `${playerName1} as ${fighterType1} `;
  // playerHeader2.innerText = `${playerName2} as ${fighterType2} `;



  // const fighter1 = new FighterType('fighterType1'); 
  // fighter1.getName();

  //HUr hämtar jag in objectet och dess info här
  // console.log(`${fighter1.getName()} have ${fighter1.getMaxHealth()} in maxhealth`);

  // console.log('fighterType');
  // console.log(FighterType);



//  returna divhealth som innehåller resten av gränssittet




  

  // for(const prop in fighterType){
  //   console.log(prop, fighterType[prop]);  
  // }
  // for(const prop in Kunimitsu){
  //   console.log(prop, Kunimitsu[prop]);  
  // }
}

// export {displayPlayerInfo}