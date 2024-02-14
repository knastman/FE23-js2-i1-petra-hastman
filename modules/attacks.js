import { FighterZangief, FighterKunimitsu } from "./fighterType.js";
import { displayFigher, createFighter } from "./display.js";

const fighterChoice1 = '';
const fighterChoice2 = '';

// export function createAttackBtns(playerONEE, playerTWO){
export function createAttackBtns(fighterType1, fighterType2, player1, player2){
  const fighterChoice1 = createFighter(fighterType1);
  const fighterChoice2 = createFighter(fighterType2);
  // console.log(fighterType1); //Endast namnen
  // console.log(fighterType2);
  // console.log(fighterChoice1); //Klasserna
  // console.log(fighterChoice2);

  console.log(player1);
  console.log(player2);

  let attackButtons1 ='';
  let attackButtons2 ='';

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

  // kunimitsuButton.forEach(button => {
  attackButtons1.forEach(button => {
    button.addEventListener('click', function() {
      const attackName = button.getAttribute('data-attack-name');

      const selectedAttack = fighterChoice1.getAttacks().find(attack => attack.attackName.toLowerCase() === attackName.toLowerCase());
      console.log('selectedAttack');
      console.log(selectedAttack);
      
      // if (selectedAttack) {
      const damage = selectedAttack.attackDamage;
      // const attackDamage = selectedAttack.getAttackDamage;
      // const attackDamage = fighterChoice.attackDamage(); //funkar ej
      console.log('damage');
      console.log(damage);

      if (fighterChoice2.hitOrMiss()) {
        // fighterChoice2.applyDamage(damage);
        console.log(`${fighterChoice2.getName()}/${player2} takes ${damage} damage!`);
        fighter2CurrentHealth -= damage;
        console.log(`${player2} have${fighter2CurrentHealth} health left`);

      } else {
        console.log(`${fighterChoice2.getName()}/${player2} dodges the attack!`);
        console.log(`${player2} have ${fighter2CurrentHealth} health left`);
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
          fighterChoice1.applyDamage(damage);
          console.log(`${fighterChoice1.getName()}/${player1}  takes ${damage} damage!`);
          fighter1CurrentHealth -= damage;
          console.log(`${player1} have${fighter1CurrentHealth} health left`);

        } else {
          console.log(`${fighterChoice1.getName()}/${player1} dodges the attack!`);
          console.log(`${player1} have ${fighter1CurrentHealth} health left`);
        }
        setTurn(toggleTurn());
      } else {
        console.log(`Attack not found: ${attackName}`);
      }
    });
    
  });
  
  // let isKunimitsuTurn = true;
  let isPlayer1Turn = true;
  function setTurn() {
    if (isPlayer1Turn) {
      console.log(`It's ${fighterChoice1.getName()}/${player1} turn`);
      attackButtons2.forEach(button => {
          button.disabled = true;
      });
      attackButtons1.forEach(button => {
          button.disabled = false;
      });
    } else {
      console.log(`It's ${fighterChoice2.getName()}/${player2} turn`);
      attackButtons1.forEach(button => {
          button.disabled = true;
      });
      attackButtons2.forEach(button => {
          button.disabled = false;
      });
    }
  }
  
  function toggleTurn() {
    isPlayer1Turn = !isPlayer1Turn;
    
  } 
}



 /****************** Display Healthbar and maxhealth *******************/ 

 export function createHealthElement(fighterChoice){
  console.log('fighterChoice i healtfunc');
  console.log(fighterChoice);

  let fighterCurrentHealth = fighterChoice.getMaxHealth();
  console.log('fighterCurrentHealth i healtfun');
  console.log(fighterCurrentHealth);

  const divHealth = document.createElement('div');
  divHealth.classList.add('health');

  const healthBorderDiv = document.createElement('div');
  healthBorderDiv.classList.add('healthBorder');

  const healthbarDiv = document.createElement('div');
  healthbarDiv.id = 'currentHealth';
  healthbarDiv.classList.add('healthbar');
  // healthbarDiv.innerText = this.currentHealth;


  healthbarDiv.innerText = '370'; //Detta ska hämtas från metoden när den finns

  const healthInfoDiv = document.createElement('div');
  healthInfoDiv.classList.add('healthInfo');

  const healthspan1 = document.createElement('span');
  const healthspan2 = document.createElement('span');
  healthspan2.id = 'maxHealth';

  healthspan1.innerText = 'Health';

  divHealth.append(healthBorderDiv, healthInfoDiv);
  healthBorderDiv.append(healthbarDiv);
  healthInfoDiv.append(healthspan1, healthspan2);


  // const maxHealthElement = healthElement.querySelector("#maxHealth");
  const fighterMaxHealth = fighterChoice.getMaxHealth();//FRÅN CLASSEN 
  // const fighterMaxHealth = 'fighterChoice.getMaxHealth()';//FRÅN CLASSEN 
  healthspan2.innerText =  `MAX ${fighterMaxHealth}`; //FRÅN CLASSEN 

  return divHealth;
}



//GAMMALLT FRÅN DEN ANDRA FILEN 
// function createAttackBtns(playerONEE, playerTWO){
// const fighterChoice1 = createFighter(playerONEE);
// const fighterChoice2 = createFighter(playerTWO);
// kunimitsuButton.forEach(button => {
//   button.addEventListener('click', function() {
//     const attackName = button.getAttribute('data-attack-name');
//     const selectedAttack = fighterChoice1.getAttacks().find(attack => attack.attackName.toLowerCase() === attackName.toLowerCase());
//     if (selectedAttack) {
//       const damage = selectedAttack.attackDamage;
//       console.log('damage i attacks');
//       console.log(damage);
//       if (fighterChoice2.hitOrMiss()) {
//         fighterChoice2.applyDamage(damage);
//         console.log(`${fighterChoice2.getName()} takes ${damage} damage!`);
//       } else {
//         console.log(`${fighterChoice2.getName()} dodges the attack!`);
//       }
//       setTurn(toggleTurn());
//     } else {
//       console.log(`Attack not found: ${attackName}`);
//     }
//   });
// });
// }
  
  




// export{createAttackBtns} 






  // kunimitsuButton.forEach(button => {
  //   button.addEventListener('click', function() {
  //     console.log('Inne i attackerna kunu');
  //     const attackName = button.getAttribute('data-attack-name');
  //     const selectedAttack = fighterChoice1.getAttacks().find(attack => attack.attackName.toLowerCase() === attackName.toLowerCase());
  //     console.log('selectedAttack i attacks.js');
  //     console.log(selectedAttack);
  //     if (selectedAttack) {
  //       const damage = selectedAttack.attackDamage;
  //       if (fighterChoice1.hitOrMiss()) {
  //         fighterChoice1.applyDamage(damage);
  //         console.log(`${fighterChoice1.getName()} takes ${damage} damage!`);
  //       } else {
  //         console.log(`${fighterChoice1.getName()} dodges the attack!`);
  //       }
  //       //setTurn(toggleTurn());
  //     } else {
  //       console.log(`Attack not found: ${attackName}`);
  //     }
  //   });
  // });


    // if(fighterType1 === Kunimitsu ){
  //   const attackButton1 = document.querySelectorAll('.Kunimitsubutton');
  // }
  // if(fighterType1 === Zangief ){
  //   const attackButton1 = document.querySelectorAll('.Kunimitsubutton');
  // }



    // const kunimitsuButton = document.querySelectorAll('.Kunimitsubutton');
  // const zangiefButton = document.querySelectorAll('.Zangiefbutton');
  // console.log('kunimitsuButton');
  // console.log(kunimitsuButton);
  // console.log('zangiefButton');
  // console.log(zangiefButton);




    // console.log('fighter1MaxHealth');
  // console.log(fighter1MaxHealth);
  // console.log(fighter2MaxHealth);

  // console.log('attackButtons1');
  // console.log(attackButtons1);
  // console.log('attackButtons2');
  // console.log(attackButtons2);

  // let currentHealthPlayer1 = fighterChoice1.currentHealth();
  // let currentHealthPlayer2 = fighterChoice2.currentHealth();
  // console.log('currentHealthPlayer1');
  // console.log(currentHealthPlayer1);
  // console.log(currentHealthPlayer2);


        // const attackDamage = button.getAttribute('data-attack-damage');
      // console.log('attackDamage');
      // console.log(attackDamage);




      // export function createFighter1(fighterType1){
//   const fighterChoice1 = createFighter(fighterType1);
//   console.log('fighterChoice1 i createfighter1');
//   console.log(fighterChoice1);
//   return fighterChoice1;
// }

// export function createFighter2(fighterType2){
//   const fighterChoice2 = createFighter(fighterType2);
//   return fighterChoice2;
// }