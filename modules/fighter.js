import {displayFigher, displayKO} from "./display.js"
class Fighter {
  #name;
  #maxHealth;
  #currentHealth 
  #imgUrl;
  // #damage;
  #attacks;

  constructor(name, maxHealth, currentHealth, imgUrl,  attacks) {
    this.#name = name;
    this.#maxHealth = maxHealth;
    // this.currentHealth = maxHealth;
    this.#currentHealth = currentHealth;
    this.#imgUrl = imgUrl;
    // this.#damage = damage;
    // this.#attacks = [];
    this.#attacks = attacks;
  }

  getName() {
    return this.#name;
  }

  getMaxHealth() {
    return this.#maxHealth;
  }

  getImgUrl() {
    return this.#imgUrl;
  }

  hitOrMiss() {
    const random = Math.random();
    return random < 0.5; 
  }

  getAttacks(){
    // for (const attack of this.#attacks ){
    //   console.log(`${attack.attackName}, ${attack.attackDamage}`);
    // }  
    return this.#attacks; 
  }

  // getCurrentHealth() {
  //   return this.#currentHealth;
  // }
  resetGame() {
    // Återställ spelvärden till ursprungligt tillstånd
    this.#currentHealth = this.#maxHealth;
    // Lägg till andra återställningar beroende på ditt spel

    console.log('Game reset!');
  } 

  
  
  currentHealth(damage) {
    this.#currentHealth -= damage;
    console.log('Current health i klassen');
    if (this.#currentHealth <= 0) {
      this.#currentHealth = 0;
      console.log(`${this.#name} is defeated! Game over!`);
      displayKO();
      this.resetGame();
      
    }
    return this.#currentHealth;
  }
  getCurrentHealth() {
    return this.#currentHealth;
  }
  /* applyDamage(damage) {
    this.currentHealth -= damage;

    if (this.currentHealth < 0) {
      this.currentHealth <= 0;
      console.log('Game over! Restarting the game...');
    }
  } */

  // displayHealth() {

  // }
}


export class Attack { 
  constructor(attackName, attackDamage, attackImgUrl){
    // this.fighter = fighter;
    this.attackName = attackName;
    this.attackDamage = attackDamage;
    this.attackImgUrl = attackImgUrl;
  }

  getAttackName(){    
    return this.attackName;
  }
  getAttackDamage(){    
    return this.attackDamage;
  }
  getAttackImgUrl(){    
    return this.attackImgUrl;
  }

  setAttackDamage(fighter) {
    fighter.applyDamage(this.attackDamage);
    console.log(`${this.attackName} applied to ${fighter.getName()}. ${fighter.getName()}'s health: ${fighter.currentHealth}`);
  }
}

// Tidigare lösning men ovan är den som används?
// export class Attacklist { 
//   constructor(listName){
//     this.listName = listName;
//     this.attacks = [];
//   }
//   setAttack(attackobject){
//     // this.attacks[0] = attack;
//     this.attacks.push(attackobject);
//     console.log(attackobject.attackname);

//   }
//   getAttacks(){    
//     for (const attack of this.attacks ){ 
//       console.log(`${attack.attackname}, ${attack.attackdamage}`);
//       console.log('Från attacklist');
//     }
//     return this.attacklist;
//     // return this.list;
//   }
// }




export{Fighter} ;



  // setAttacks(attackObj) {
  //   this.#attacks.push(attackObj);
  // }
  
  // getAttackName(){
  //   for (const attack of this.#attacks ){
  //     attackName = attack.attackName;
  //     console.log('attackName via variabel');
  //     console.log(attackName);
  //   }  
  //   // return attackName;
  // }