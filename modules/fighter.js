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

  applyDamage(damage) {
    this.currentHealth -= damage;
    if (this.currentHealth < 0) {
        this.currentHealth = 0;
        console.log('Game over! Restarting the game...');
    }
  }

  hitOrMiss() {
    const random = Math.random();
    return random < 0.5; 
  }

  setAttacks(attackObj) {
    this.attacklist.push(attackObj);
  }

  getAttacks() {
    console.log(this.#attacks);
    for (const attack of this.attacks ){
      console.log(`${attackObj.attackName}, ${attackObj.attackDamage}`);
      // return this.#attacklist;
    }  
  }

  // displayHealth() {

  // }
}



//Detta är bara lite testning. Jag vill få in attackerna som object på fightern eg
export class Attack { 
  #attackName;
  #attackDamage;
  #imgUrl;

  constructor(attackName, attackDamage, imgUrl){
    // this.fighter = fighter;
    this.#attackName = attackName;
    this.#attackDamage = attackDamage;
    this.#imgUrl = imgUrl;
  }

  getAttackName(){    
    return this.#attackName;
  }
  getAttackDamage(){    
    return this.#attackDamage;
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



