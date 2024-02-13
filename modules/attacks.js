import { FighterZangief, FighterKunimitsu } from "./fighterType.js";

const kunimitsuButton = document.querySelectorAll('.kunimitsuButton');
const zangiefButton = document.querySelectorAll('.zangiefButton');


function createAttackBtns(playerONEE, playerTWO){
  kunimitsuButton.forEach(button => {
    button.addEventListener('click', function() {
      const attackName = button.getAttribute('data-attack-name');
      const selectedAttack = playerTWO.getAttacks().find(attack => attack.attackName.toLowerCase() === attackName.toLowerCase());
      if (selectedAttack) {
        const damage = selectedAttack.attackDamage;
        if (playerONEE.hitOrMiss()) {
          playerONEE.applyDamage(damage);
          console.log(`${playerONEE.getName()} takes ${damage} damage!`);
        } else {
          console.log(`${playerONEE.getName()} dodges the attack!`);
        }
        //setTurn(toggleTurn());
      } else {
        console.log(`Attack not found: ${attackName}`);
      }
    });
  });
  
  zangiefButton.forEach(button => {
    button.addEventListener('click', function() {
      const attackName = button.getAttribute('data-attack-name');
      const selectedAttack = playerONEE.getAttacks().find(attack => attack.attackName.toLowerCase() === attackName.toLowerCase());
  
      if (selectedAttack) {
        const damage = selectedAttack.attackDamage;
        if (playerTWO.hitOrMiss()) {
          playerTWO.applyDamage(damage);
          console.log(`${playerTWO.getName()} takes ${damage} damage!`);
        } else {
          console.log(`${playerTWO.getName()} dodges the attack!`);
        }
        //setTurn(toggleTurn());
      } else {
        console.log(`Attack not found: ${attackName}`);
      }
    });
  });
  
 /*  let isKunimitsuTurn = true;
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
    
  } */

}



  
  




export{createAttackBtns} 