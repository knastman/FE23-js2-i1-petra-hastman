// import { displayPlayerInfo, displayFigher } from "./modules/display.js";
import { displayFighers } from "./modules/display.js";
import { Fighter, Attacklist } from "./modules/fighter.js";
// import { FighterZangief, FighterKunimitsu } from "./modules/fighterType.js";
import { FighterType} from "./modules/fighterType.js";
import {setTurn, toggleTurn} from "./modules/attacks.js";

const form = document.querySelector('form');
const formContainer = document.querySelector('#formContainer');
const playersContainer = document.querySelector('#playersContainer');

// const kunimitsuButton = document.querySelectorAll('.kunimitsuButton');
// const zangiefButton = document.querySelectorAll('.zangiefButton');

// Deklarera här
// const fighterZangief = new FighterZangief();
// const fighterKunimitsu = new FighterKunimitsu(); 

const fighterZangief = new FighterType('Zangief', 520);
const fighterKunimitsu = new FighterType('Kunimitsu', 430); 

/*********************************
 Get values from form
**********************************/
//Lägg till att de måste fylla i  både namn och fighter

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formContainer.classList.add("hide");
    playersContainer.classList.remove("hide");

    const playerOne = document.querySelector('#playerOne'); 
    const playerTwo = document.querySelector('#playerTwo');
    const fighterTypeOne = document.querySelector('#fighterOne');
    const fighterTypeTwo = document.querySelector('#fighterTwo');

    // const typeAndPlayerOne = `${playerOne.value} as ${fighterTypeOne.value}`; 
    // const typeAndPlayerOne = `${playerOne.value} as ${fighterTypeOne.value}`;

    const playerOneName = `${playerOne.value}`;
    const fighterChoice1 = `${fighterTypeOne.value}`; 
    // console.log('Player1 name: '+ playerOneName);
    // console.log('Player1 choice: '+ fighterChoice1);

    const playerTwoName = `${playerTwo.value}`;
    const fighterChoice2 = `${fighterTypeTwo.value}`; 
  

    displayFighers(fighterChoice1, playerOneName, fighterChoice2, playerTwoName );
    
    // playerOneContainer.innerHTML = '';
    // playerTwoContainer.innerHTML = '';

    // displayPlayerInfo(typeAndPlayerOne, playerOneContainer);
    // displayPlayerInfo(typeAndPlayerTwo, playerTwoContainer);  

    form.reset(); 
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

const fighter1 = new FighterType('Kunimitsu', 650); 

const kunimitsuAttackList = new Attacklist([{attackname: 'Blizzard combo', attackdamage: 40}]); //Funkar ej att lägga in objext såhär, kolla upp
kunimitsuAttackList.showAttacks();
kunimitsuAttackList.addAttack({attackname: 'Blizzard combo', attackdamage: 40});
kunimitsuAttackList.addAttack({attackname: 'explosive jab', attackdamage: 85});

console.log(kunimitsuAttackList.list); //Dena visar rätt

const kattacklist = kunimitsuAttackList.list;
console.log(kattacklist);

// KunimitsuAttackList = {attackName: 'Blizzard combo', attackDamage: 40, attackRisk: 1}

fighter1.getName();
kunimitsuAttackList.showAttacks();
console.log(`${fighter1.getName()} have  ${fighter1.getMaxHealth()} in maxhealth`);
// console.log(`${fighter1.getName()} have  ${fighter1.getMaxHealth()} in maxhealth.He/She have the attacks: ${fighter1.attacklist()}`);
console.log(`${fighter1.getName()} have  ${fighter1.getMaxHealth()} in maxhealth.He/She have the attacks: ${kunimitsuAttackList.showAttacks()}`); //Denna visar bara object


// Flytta detta till display eller går det göra en export så det går att hämta i flera functioner/filer

