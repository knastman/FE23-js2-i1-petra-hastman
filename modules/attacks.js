import { FighterZangief, FighterKunimitsu } from "./fighterType.js";

const kunimitsuButton = document.querySelectorAll('.kunimitsuButton');
const zangiefButton = document.querySelectorAll('.zangiefButton');

const fighterZangief = new FighterZangief();
const fighterKunimitsu = new FighterKunimitsu(); 



/*********************************
  Attack types handlers
**********************************/

kunimitsuButton.forEach(button => {
  button.addEventListener('click', function() {
    const attackName = button.getAttribute('data-attack-name');
    const selectedAttack = fighterKunimitsu.getAttacks().find(attack => attack.attackName.toLowerCase() === attackName.toLowerCase());

    if (selectedAttack) {
      const damage = selectedAttack.attackDamage;
      if (fighterZangief.hitOrMiss()) {
        fighterZangief.applyDamage(damage);
        console.log(`${fighterZangief.getName()} takes ${damage} damage!`);
      } else {
        console.log(`${fighterZangief.getName()} dodges the attack!`);
      }
      setTurn(toggleTurn());
    } else {
      console.log(`Attack not found: ${attackName}`);
    }
  });
});

zangiefButton.forEach(button => {
  button.addEventListener('click', function() {
    const attackName = button.getAttribute('data-attack-name');
    const selectedAttack = fighterZangief.getAttacks().find(attack => attack.attackName.toLowerCase() === attackName.toLowerCase());

    if (selectedAttack) {
      const damage = selectedAttack.attackDamage;
      if (fighterKunimitsu.hitOrMiss()) {
        fighterKunimitsu.applyDamage(damage);
        console.log(`${fighterKunimitsu.getName()} takes ${damage} damage!`);
      } else {
        console.log(`${fighterKunimitsu.getName()} dodges the attack!`);
      }
      setTurn(toggleTurn());
    } else {
      console.log(`Attack not found: ${attackName}`);
    }
  });
});

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

export{setTurn, toggleTurn} 