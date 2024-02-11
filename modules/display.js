import { FighterType} from "./fighterType.js";


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


const playerOneContainer = document.querySelector('#playerNameOne');
const playerTwoContainer = document.querySelector('#playerNameTwo');


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
export function displayFighers(fighterType1, playerName1, fighterType2, playerName2){
  const fighter1 = new FighterType('fighterType1'); 
  fighter1.getName();

  //HUr hämtar jag in objectet och dess info här
  console.log(`${fighter1.getName()} have  ${fighter1.getMaxHealth()} in maxhealth`);

  console.log('fighterType');
  console.log(FighterType);

  const playerHeader1 = document.createElement('h3');
  const playerHeader2 = document.createElement('h3');
  playerOneContainer.append(playerHeader1);
  playerTwoContainer.append(playerHeader2);
  playerHeader1.innerText = `${playerName1} as ${fighterType1} `;
  playerHeader2.innerText = `${playerName2} as ${fighterType2} `;

  // for(const prop in fighterType){
  //   console.log(prop, fighterType[prop]);  
  // }
  // for(const prop in Kunimitsu){
  //   console.log(prop, Kunimitsu[prop]);  
  // }
}

// export {displayPlayerInfo}