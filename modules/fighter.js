class Fighter {
  #name;
  #maxHealth;
  #damage;
  #attacks;
  #imgUrl;
  
  constructor(name, maxHealth, damage, attacks, currentHealth, imgUrl) {
    this.#name = name;
    this.#maxHealth = maxHealth;
    this.#damage = damage;
    this.#attacks = [];
    this.currentHealth = maxHealth;
    this.#attacks = attacks;
    this.#imgUrl = imgUrl;
  }

  getName() {
    return this.#name;
  }

  getMaxHealth() {
    return this.#maxHealth;
  }

  
  hitOrMiss() {
    const random = Math.random();
    return random < 0.5; 
  }

  setAttacks(attackObj) {
    this.#attacks.push(attackObj);
  }

  getAttacks(){
    console.log(this.#attacks);
    for (const attack of this.#attacks ){
      console.log(`${attack.attackName}, ${attack.attackDamage}`);
       //return this.#attacks;
    }  
    return this.#attacks; 
  }

  applyDamage(damage) {
    this.currentHealth -= damage;
    if (this.currentHealth < 0) {
      this.currentHealth = 0;
      console.log('Game over! Restarting the game...');
    }
  }

  // displayHealth() {

  // }
}



//Detta är bara lite testning. Jag vill få in attackerna som object på fightern eg
export class Attack { 
  

  constructor(attackName, attackDamage, imgUrl){
    // this.fighter = fighter;
    this.attackName = attackName;
    this.attackDamage = attackDamage;
    this.imgUrl = imgUrl;
  }

  getAttackName(){    
    return this.attackName;
  }
  getAttackDamage(){    
    return this.attackDamage;
  }

  setAttackDamage(fighter) {
    fighter.applyDamage(this.attackDamage);
    console.log(`${this.attackName} applied to ${fighter.getName()}. ${fighter.getName()}'s health: ${fighter.currentHealth}`);
  }
}


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
//     }
//     return this.attacklist;
//     // return this.list;
//   }
// }







export{Fighter} ;



