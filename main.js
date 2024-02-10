import { displayPlayerInfo } from "./modules/display.js";
import { Fighter } from "./modules/fighter.js";
import { FighterZangief, FighterKunimitsu } from "./modules/fighterType.js";

const form = document.querySelector('form');
const kunimitsuButton = document.querySelectorAll('.kunimitsuButton');
const zangiefButton = document.querySelectorAll('.zangiefButton');

// Deklarera här
const fighterZangief = new FighterZangief();
const fighterKunimitsu = new FighterKunimitsu(); 


/*********************************
 Get values from form
**********************************/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const playerOne = document.querySelector('#playerOne'); 
    const playerTwo = document.querySelector('#playerTwo');
    const fighterTypeOne = document.querySelector('#fighterOne');
    const fighterTypeTwo = document.querySelector('#fighterTwo');
    const playerOneContainer = document.querySelector('#playerNameOne');
    const playerTwoContainer = document.querySelector('#playerNameTwo');

    const typeAndPlayerOne = `${playerOne.value} as ${fighterTypeOne.value}`; 
    const typeAndPlayerTwo = `${playerTwo.value} as ${fighterTypeTwo.value}`;
    //Eller att båda har value här? 
    
    playerOneContainer.innerHTML = '';
    playerTwoContainer.innerHTML = '';

    displayPlayerInfo(typeAndPlayerOne, playerOneContainer);
    displayPlayerInfo(typeAndPlayerTwo, playerTwoContainer);  
    //Ska man inte bygga hela typsnittet, utifrån val av fightertyp här, blir det inte konstigt att bara hämta en sak -> allt hänger ihop? 
    

    form.reset(); //ska denna kanske vara med? 
});


/*********************************
  Attack types handlers
**********************************/

zangiefButton.forEach(button => {
    button.addEventListener('click', function() {
        const attackName = button.getAttribute('data-attack-name');
        if (attackName === 'air manipulation') {
            const damage = 40;
            if (fighterKunimitsu.hitOrMiss()) {
                fighterKunimitsu.applyDamage(damage);
                console.log(`${fighterKunimitsu.getName()} takes ${damage} damage!`);
            } else {
                console.log(`${fighterKunimitsu.getName()} dodges the attack!`);
            }
        } 
        else if(attackName === 'focus attack'){
            const damage = 85;
            if (fighterKunimitsu.hitOrMiss()) {
                fighterKunimitsu.applyDamage(damage);
                console.log(`${fighterKunimitsu.getName()} takes ${damage} damage!`);
            } else {
                console.log(`${fighterKunimitsu.getName()} dodges the attack!`);
            }
        }
        else if(attackName === 'dynamite punch'){
            const damage = 25;
            if (fighterKunimitsu.hitOrMiss()) {
                fighterKunimitsu.applyDamage(damage);
                console.log(`${fighterKunimitsu.getName()} takes ${damage} damage!`);
            } else {
                console.log(`${fighterKunimitsu.getName()} dodges the attack!`);
            }
        }

        else {
            const damage = 250;
             if (fighterKunimitsu.hitOrMiss()) {
                fighterKunimitsu.applyDamage(damage);
                console.log(`${fighterKunimitsu.getName()} takes ${damage} damage!`);
            } else {
                console.log(`${fighterKunimitsu.getName()} dodges the attack!`);
            }
            
            
        }
        setTurn(toggleTurn());
    });
});

kunimitsuButton.forEach(button => {
    button.addEventListener('click', function() {
        const attackName = button.getAttribute('data-attack-name');
        if (attackName === 'blizzard combo') {
            const damage = 40;
            if (fighterZangief.hitOrMiss()) {
                fighterZangief.applyDamage(damage);
                console.log(`${fighterZangief.getName()} takes ${damage} damage!`);
            } else {
                console.log(`${fighterZangief.getName()} dodges the attack!`);
            }
        }
        else if (attackName === 'explosive jab') {
            const damage = 85;
            if (fighterZangief.hitOrMiss()) {
                fighterZangief.applyDamage(damage);
                console.log(`${fighterZangief.getName()} takes ${damage} damage!`);
            } else {
                console.log(`${fighterZangief.getName()} dodges the attack!`);
            }
        }

        else if (attackName === 'shuriken throw') {
            const damage = 85;
            if (fighterZangief.hitOrMiss()) {
                fighterZangief.applyDamage(damage);
                console.log(`${fighterZangief.getName()} takes ${damage} damage!`);
            } else {
                console.log(`${fighterZangief.getName()} dodges the attack!`);
            }
        }

        else {
            const damage = 250;
            if (fighterZangief.hitOrMiss()) {
                fighterZangief.applyDamage(damage);
                console.log(`${fighterZangief.getName()} takes ${damage} damage!`);
            } else {
                console.log(`${fighterZangief.getName()} dodges the attack!`);
            }
        }
        setTurn(toggleTurn());
    });
});


// Inte helt nöjd med placering här, kikar över bättre lösning imorgon 
let isKunimitsuTurn = true;

function setTurn() {
    if (isKunimitsuTurn) {
        zangiefButton.forEach(button => {
            button.disabled = true;
        });
        kunimitsuButton.forEach(button => {
            button.disabled = false;
        });
    } else {
        kunimitsuButton.forEach(button => {
            button.disabled = true;
        });
        zangiefButton.forEach(button => {
            button.disabled = false;
        });
    }
}

function toggleTurn() {
    isKunimitsuTurn = !isKunimitsuTurn;
    
}


