import { FighterZangief, FighterKunimitsu } from "./fighterType.js";
import { displayFigher, createFighter, displayKO, displayFighterMessage, displayHealthBar } from "./display.js";

const fighterChoice1 = '';
const fighterChoice2 = '';

let messageElement='';


export function createAttackBtns(fighterType1, fighterType2, player1, player2){
  const fighterChoice1 = createFighter(fighterType1); //Hämta all info från klassen
  const fighterChoice2 = createFighter(fighterType2); //Hämta all info från klassen
 
  let attackButtons1 ='';
  let attackButtons2 ='';

  const playerCard1 = document.querySelector('.player1');//Hämtar hela spelboxarna
  const playerCard2 = document.querySelector('.player2');//Hämtar hela spelboxarna


  

  switch(fighterType1) {
    case "Kunimitsu":
      attackButtons1 = document.querySelectorAll('.Kunimitsubutton');
      break;
    case "Zangief":
      attackButtons1 = document.querySelectorAll('.Zangiefbutton');
      break;
    default:
      console.log('Det blev inga knappar på 1');
  }
  switch(fighterType2) {
    case "Kunimitsu":
      attackButtons2 = document.querySelectorAll('.Kunimitsubutton');
      break;
    case "Zangief":
      attackButtons2 = document.querySelectorAll('.Zangiefbutton');
      break;
    default:
      console.log('Det blev inga knappar på 2');
  }

  let fighter1CurrentHealth = fighterChoice1.getMaxHealth();
  let fighter2CurrentHealth = fighterChoice2.getMaxHealth();

  const fighterMaxHealth1 = fighterChoice1.getMaxHealth();//FRÅN CLASSEN 
  const fighterMaxHealth2 = fighterChoice2.getMaxHealth();//FRÅN CLASSEN 

  const currentHealth1 = fighterChoice1.getCurrentHealth(); 
  const currentHealth2 = fighterChoice2.getCurrentHealth(); 



  function resetGame() {
    fighterChoice1.resetGame();
    fighter1CurrentHealth = fighterChoice1.getMaxHealth();
    fighterChoice2.resetGame();
    fighter2CurrentHealth = fighterChoice2.getMaxHealth();
  }
   
  attackButtons1.forEach(button => {
    button.addEventListener('click', function() {
      const attackName = button.getAttribute('data-attack-name');
      const selectedAttack = fighterChoice1.getAttacks().find(attack => attack.attackName.toLowerCase() === attackName.toLowerCase());
      const damage = selectedAttack.attackDamage;
      
      if (fighterChoice2.hitOrMiss()) {
        fighterChoice2.calcCurrentHealth(damage); 
        fighter2CurrentHealth = fighterChoice2.getCurrentHealth();
        displayFighterMessage(`${fighterChoice2.getName()}/${player2} takes ${damage} damage from ${attackName}!`);
        console.log(`${fighterChoice2.getName()}/${player2} takes ${damage} damage!`);
        console.log(`${fighterChoice2.getName()}/${player2} current health is ${fighter2CurrentHealth}`);// Denna visar rätt
        displayHealthBar(`${fighter2CurrentHealth}`, '2', `${fighterChoice2.getName()}`);

      } else {
        displayFighterMessage(`${fighterChoice2.getName()}/${player2} dodges the attack!`);
      }

      //Nollställer spel om fighter 2 blivit knockad. Uppdaterar nuvarande hälsa(som börjar på maxhälsans värde)
      if (fighter2CurrentHealth <= 0) {
        console.log(`${player1} WON!  and have ${fighter1CurrentHealth} health left`); 
        displayFighterMessage(`${player1} is the WINNER! `);
        displayKO('2');
        resetGame();
      }
      setTurn(toggleTurn());

    // } else {
    //   console.log(`Attack not found: ${attackName}`);
    // }
    });
  });

  attackButtons2.forEach(button => {
    button.addEventListener('click', function() {
      const attackName = button.getAttribute('data-attack-name');
      const selectedAttack = fighterChoice2.getAttacks().find(attack => attack.attackName.toLowerCase() === attackName.toLowerCase());
  
      if (selectedAttack) {
        const damage = selectedAttack.attackDamage;
        if (fighterChoice1.hitOrMiss()) {
          fighterChoice1.calcCurrentHealth(damage);
          fighter1CurrentHealth = fighterChoice1.getCurrentHealth(); // Uppdatera nuvarande hälsa
          // displayHealthBar(fighterChoice2, '2');
          displayFighterMessage(`${fighterChoice1.getName()}/${player1} takes ${damage} damage from ${attackName}!`);
          console.log(`${fighterChoice1.getName()}/${player1} takes ${damage} damage!`);
          console.log(`${fighterChoice1.getName()}/${player1} current health is ${fighter1CurrentHealth}`); //Denna visar rätt
          displayHealthBar(`${fighter1CurrentHealth}`, '1', `${fighterChoice1.getName()}`);
  
        } else {
          displayFighterMessage(`${player1} dodges the attack!`);
        }

        //Nollställer spel om fighter 1 blivit knockad. Uppdaterar nuvarande hälsa(som börjar på maxhälsans värde)
        if (fighter1CurrentHealth <= 0) {
          console.log(`${player2} WON! and have ${fighter2CurrentHealth} health left `);
          displayFighterMessage(`${player2} WON!`);
          displayKO('1');
          resetGame();
        }
        setTurn(toggleTurn());
      } else {
        console.log(`Attack not found: ${attackName}`);
      }
    });
    
  });
  
  messageElement = document.querySelector('.messageElement');
  let isPlayer1Turn = true;
  function setTurn() {
    if (isPlayer1Turn) {
      // console.log(`It's ${player1} turn`);
      playerCard2.classList.add('opacity');
      playerCard1.classList.remove('opacity');
      // messageElement.classList.add('hide');
      // messageElement.classList.add('removeHide');
      attackButtons2.forEach(button => {
          button.disabled = true;
          // playerCard1.classList.remove('opacity');
      });
      attackButtons1.forEach(button => {
          button.disabled = false;
          playerCard1.classList.remove('opacity');
      });
    } else {
      // console.log(`It's ${player2} turn`);
      playerCard1.classList.add('opacity');
      playerCard2.classList.remove('opacity');
      attackButtons1.forEach(button => {
          button.disabled = true;
          // playerCard1.classList.add('opacity');
          // playerCard2.classList.remove('opacity');
      });
      attackButtons2.forEach(button => {
          button.disabled = false;
      });
    }
  }
  
  function toggleTurn() {
    isPlayer1Turn = !isPlayer1Turn;

  } 
}  // STORA FUNKTIONEN SLUT



//FUNKAR SÅHÄR
// function displayCurrentHealthValue(currentHealthfighter, fighter){
// console.log('currentHealthfighter');
// console.log(currentHealthfighter);
// console.log('fighter');
// console.log(fighter);
// let currentHealthfighter1 = '';
// let currentHealthfighter2 = '';

//   if (fighter =='1'){
//     currentHealthfighter1 = currentHealthfighter;
//     console.log(`Nuvarande hälsa fighter 1 ${currentHealthfighter1}`);
//   }
//   else if(fighter =='2'){
//     currentHealthfighter2 = currentHealthfighter;
//     console.log(`Nuvarande hälsa fighter 2 ${currentHealthfighter2}`);
//   }

// }











  
  




