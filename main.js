import { displayFigher, createFighter } from "./modules/display.js";
import { Fighter, Attack } from "./modules/fighter.js";
 import {createAttackBtns} from "./modules/attacks.js";
 import { FighterKunimitsu, FighterZangief } from "./modules/fighterType.js";

const form = document.querySelector('form');
const formContainer = document.querySelector('#formContainer');
const playersContainer = document.querySelector('#playersContainer');
const startContainer = document.querySelector('#startContainer');
const newGameButton = document.querySelector('#newGameButton');
const newGameBtnDiv = document.querySelector('.newGameBtnDiv');
// console.log(newGameBtnDiv);

/*********************************
 Get values from form
**********************************/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formContainer.classList.add("hide");
    startContainer.classList.add("hide");
    playersContainer.classList.remove("hide");
   
    const playerOne = document.querySelector('#playerOne'); 
    const playerTwo = document.querySelector('#playerTwo');
    const fighterTypeOne = document.querySelector('#fighterOne');
    const fighterTypeTwo = document.querySelector('#fighterTwo');

    const playerOneName = `${playerOne.value}`;
    const fighterChoice1 = `${fighterTypeOne.value}`; 
    // const fighterChoice1 = createFighter(`${fighterTypeOne.value}`); 

    const playerTwoName = `${playerTwo.value}`;
    const fighterChoice2 = `${fighterTypeTwo.value}`; 
     // const fighterChoice2 = createFighter(`${fighterTypeTwo.value}`);

 // fighterChoice(fighterChoice1);
    displayFigher(fighterChoice1, playerOneName, '1');
    displayFigher(fighterChoice2, playerTwoName, '2'); 
    createAttackBtns(fighterChoice1, fighterChoice2, playerOneName, playerTwoName);
    // createFighter1(fighterChoice1);
    // createFighter1(fighterChoice2);

    
    form.reset(); 
});

/*********************************
  New Game 
**********************************/


 newGameButton.addEventListener('click', () => {
   startContainer.classList.remove("hide");
   formContainer.classList.remove("hide");
   playersContainer.classList.add("hide");
   newGameBtnDiv.classList.add("hide");
   

 });


