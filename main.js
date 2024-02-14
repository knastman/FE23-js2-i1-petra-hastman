// import { displayPlayerInfo, displayFigher } from "./modules/display.js";
import { displayFigher, createFighter } from "./modules/display.js";
import { Fighter, Attack } from "./modules/fighter.js";
// import { FighterZangief, FighterKunimitsu } from "./modules/fighterType.js";
// import { FighterType} from "./modules/fighterType.js";
 import {createAttackBtns} from "./modules/attacks.js";
 import { FighterKunimitsu, FighterZangief } from "./modules/fighterType.js";

const form = document.querySelector('form');
const formContainer = document.querySelector('#formContainer');
const playersContainer = document.querySelector('#playersContainer');
const startContainer = document.querySelector('#startContainer');
const newGameButton = document.querySelector('#newGameButton');
const newGameBtnDiv = document.querySelector('.newGameBtnDiv');

// let player1 player2;

/*********************************
 Get values from form
**********************************/

form.addEventListener('submit', (event) => {
    event.preventDefault();
   newGameBtnDiv.classList.remove("hide");
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
   console.log('New Game');
   startContainer.classList.remove("hide");
   formContainer.classList.remove("hide");
   playersContainer.classList.add("hide");
   newGameBtnDiv.classList.add("hide");

 });


//NEDAN ÄR FLYTTAD TILL EN EGEN MODUL

/*********************************
  Attack types handlers
**********************************/

// zangiefButton.forEach(button => {
//     button.addEventListener('click', function() {
//         const attackName = button.getAttribute('data-attack-name');
//         if (attackName === 'air manipulation') {
//             const damage = 40;
//             if (fighterKunimitsu.hitOrMiss()) {
//                 fighterKunimitsu.applyDamage(damage);
//                 console.log(`${fighterKunimitsu.getName()} takes ${damage} damage!`);
//             } else {
//                 console.log(`${fighterKunimitsu.getName()} dodges the attack!`);
//             }
//         } 
//         else if(attackName === 'focus attack'){
//             const damage = 85;
//             if (fighterKunimitsu.hitOrMiss()) {
//                 fighterKunimitsu.applyDamage(damage);
//                 console.log(`${fighterKunimitsu.getName()} takes ${damage} damage!`);
//             } else {
//                 console.log(`${fighterKunimitsu.getName()} dodges the attack!`);
//             }
//         }
//         else if(attackName === 'dynamite punch'){
//             const damage = 25;
//             if (fighterKunimitsu.hitOrMiss()) {
//                 fighterKunimitsu.applyDamage(damage);
//                 console.log(`${fighterKunimitsu.getName()} takes ${damage} damage!`);
//             } else {
//                 console.log(`${fighterKunimitsu.getName()} dodges the attack!`);
//             }
//         }

//         else {
//             const damage = 250;
//              if (fighterKunimitsu.hitOrMiss()) {
//                 fighterKunimitsu.applyDamage(damage);
//                 console.log(`${fighterKunimitsu.getName()} takes ${damage} damage!`);
//             } else {
//                 console.log(`${fighterKunimitsu.getName()} dodges the attack!`);
//             }
            
            
//         }
//         setTurn(toggleTurn());
//     });
// });

// kunimitsuButton.forEach(button => {
//     button.addEventListener('click', function() {
//         const attackName = button.getAttribute('data-attack-name');
//         if (attackName === 'blizzard combo') {
//             const damage = 40;
//             if (fighterZangief.hitOrMiss()) {
//                 fighterZangief.applyDamage(damage);
//                 console.log(`${fighterZangief.getName()} takes ${damage} damage!`);
//             } else {
//                 console.log(`${fighterZangief.getName()} dodges the attack!`);
//             }
//         }
//         else if (attackName === 'explosive jab') {
//             const damage = 85;
//             if (fighterZangief.hitOrMiss()) {
//                 fighterZangief.applyDamage(damage);
//                 console.log(`${fighterZangief.getName()} takes ${damage} damage!`);
//             } else {
//                 console.log(`${fighterZangief.getName()} dodges the attack!`);
//             }
//         }

//         else if (attackName === 'shuriken throw') {
//             const damage = 85;
//             if (fighterZangief.hitOrMiss()) {
//                 fighterZangief.applyDamage(damage);
//                 console.log(`${fighterZangief.getName()} takes ${damage} damage!`);
//             } else {
//                 console.log(`${fighterZangief.getName()} dodges the attack!`);
//             }
//         }

//         else {
//             const damage = 250;
//             if (fighterZangief.hitOrMiss()) {
//                 fighterZangief.applyDamage(damage);
//                 console.log(`${fighterZangief.getName()} takes ${damage} damage!`);
//             } else {
//                 console.log(`${fighterZangief.getName()} dodges the attack!`);
//             }
//         }
//         setTurn(toggleTurn());
//     });
// });


// // Inte helt nöjd med placering här, kikar över bättre lösning imorgon 
// let isKunimitsuTurn = true;

// function setTurn() {
//     if (isKunimitsuTurn) {
//         zangiefButton.forEach(button => {
//             button.disabled = true;
//         });
//         kunimitsuButton.forEach(button => {
//             button.disabled = false;
//         });
//     } else {
//         kunimitsuButton.forEach(button => {
//             button.disabled = true;
//         });
//         zangiefButton.forEach(button => {
//             button.disabled = false;
//         });
//     }
// }

// function toggleTurn() {
//     isKunimitsuTurn = !isKunimitsuTurn;
    
// }



/*********************************
  Get info from class TEST
**********************************/

// const fighter1 = new FighterType('Kunimitsu', 650, ); 

// fighter1.getName();

// const kunimitsuAttackList = new Attacklist([{attackname: 'Blizzard combo', attackdamage: 40}]); //Funkar ej att lägga in objext såhär, kolla upp
// const kunimitsuAttackList = new Attacklist(['Blizzard combo', 40]);
// const kunimitsuAttackList = new Attacklist([{'Blizzard combo', 40}, {'explosive jab' 85}]);
// const kunimitsuAttackList = new Attacklist([{attackname:'Blizzard combo', attackDamage: 40}, {attackname:'explosive jab', attackDamage:85}]);
// const kunimitsuAttackList = new Attacklist();

// const kunimitsuAttack1 = new Attack('Blizzard combo', 40); // Detta funkar men behöver bli en array? Som ovan
// kunimitsuAttackList.getAttacks();

// kunimitsuAttack1.getAttackName();
// kunimitsuAttack1.getAttackDamage();


// kunimitsuAttackList.setAttack({attackname: 'Blizzard combo', attackdamage: 40});
// kunimitsuAttackList.setAttack({attackname: 'explosive jab', attackdamage: 85});
// kunimitsuAttackList.setAttack(['explosive jab',  85]);

// console.log(kunimitsuAttackList.list); //Denna visar rätt

// const kattacklist = kunimitsuAttackList.list;
// console.log(kattacklist);

// KunimitsuAttackList = {attackName: 'Blizzard combo', attackDamage: 40, attackRisk: 1}



// console.log(`${fighter1.getName()} have  ${fighter1.getMaxHealth()} in maxhealth`);
// // console.log(`${fighter1.getName()} have  ${fighter1.getMaxHealth()} in maxhealth.He/She have the attacks: ${fighter1.attacklist()}`);
// // console.log(`${fighter1.getName()} have  ${fighter1.getMaxHealth()} in maxhealth.He/She have the attacks: ${kunimitsuAttackList.getAttacks()}` ); //Denna visar bara undefined eller object

// console.log(`${fighter1.getName()} have  these attacks: ${kunimitsuAttack1.getAttackName()} that has the value ${kunimitsuAttack1.getAttackDamage()} ` ); 


// // Flytta detta till display eller går det göra en export så det går att hämta i flera functioner/filer



/*********/
// const kunimitsuButton = document.querySelectorAll('.kunimitsuButton');
// const zangiefButton = document.querySelectorAll('.zangiefButton');

// Deklarera här
// const fighterZangief = new FighterZangief();
// const fighterKunimitsu = new FighterKunimitsu(); 

// const fighterZangief = new FighterType('Zangief', 520);
// const fighterKunimitsu = new FighterType('Kunimitsu', 430); 