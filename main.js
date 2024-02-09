import { displayPlayerInfo } from "./modules/display.js";
import { Fighter } from "./modules/fighter.js";
import { FighterZangief, fighterKunimitsu } from "./modules/fighterType.js";

const form = document.querySelector('form');
const attackButtons = document.querySelectorAll('.attackButton');

// Deklarera här
const fighterZangief = new FighterZangief();
const fighterkunimitsu = new fighterKunimitsu(); //ska det inte vara fighterKunimitsu där det står "figbtertype?""
// const newFighterType = new FighterType();


/*********************************
 Get values from form
**********************************/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    
    const playerOne = document.querySelector('#playerOne'); 
    const playerTwo = document.querySelector('#playerTwo');
    //Borde det inte vara value här istället

    const fighterTypeOne = document.querySelector('#fighterOne').value;
    const fighterTypeTwo = document.querySelector('#fighterTwo').value;
    const playerOneContainer = document.querySelector('.playerNameOne');
    const playerTwoContainer = document.querySelector('.playerNameTwo')

    const typeAndPlayerOne = `${playerOne.value} as ${fighterTypeOne}`; 
    const typeAndPlayerTwo = `${playerTwo.value} as ${fighterTypeTwo}`;
    //Eller att båda har value här? 
    
    playerOneContainer.innerHTML = '';
    playerTwoContainer.innerHTML = '';

    displayPlayerInfo(typeAndPlayerOne, playerOneContainer);
    displayPlayerInfo(typeAndPlayerTwo, playerTwoContainer);  
    //Ska man inte bygga hela typsnittet, utifrån val av fightertyp här, blir det inte konstigt att bara hämta en sak -> allt hänger ihop? 
    
    playerOne.value = ''; // Är detta för att tömma formuläret eller? 
    playerTwo.value = '';

    // form.reset(); ska denna kanske vara med? 
});


/*********************************
  Attack types handlers
**********************************/

// Lägg till ett klicklyssnare för varje knapp
attackButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Hämta värden från data-attributen för den klickade knappen
        const attackName = button.getAttribute('data-attack-name');
        const attackDamage = button.getAttribute('data-attack-damage');
        fighterkunimitsu.clearAttacks();
        fighterZangief.clearAttacks();
        fighterZangief.addAttack(attackName, parseInt(attackDamage));
        fighterkunimitsu.addAttack(attackName, parseInt(attackDamage));
        console.log(fighterkunimitsu.getAttackArray());
       
    });
});
/* const newFighter = new FighterZangief();
const newFighterTwo = new fighterKunimitsu(); */
/* newFighter.logInfo();
newFighterTwo.logInfo();
newFighter.addAttack('air manipulation', 40);
newFighter.addAttack('focus attack', 85);
newFighter.addAttack('dynamite punch', 25);
newFighter.addAttack('power kick', 205);
newFighter.getAttackArray();
newFighterTwo.addAttack('Flash Attack', 40);
newFighterTwo.addAttack('firekick', 85);
newFighterTwo.addAttack('explosive jab', 25);
newFighterTwo.addAttack('blizzard combo', 205);
newFighterTwo.getAttackArray(); */

