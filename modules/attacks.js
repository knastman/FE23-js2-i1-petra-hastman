
import { FighterZangief, FighterKunimitsu } from "./fighterType.js";

const kunimitsuButton = document.querySelectorAll('.kunimitsuButton');
const zangiefButton = document.querySelectorAll('.zangiefButton');

// Deklarera här
const fighterZangief = new FighterZangief();
const fighterKunimitsu = new FighterKunimitsu(); 


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

export{setTurn, toggleTurn}