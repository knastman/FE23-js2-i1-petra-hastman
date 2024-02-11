class Fighter {
  #name;
  #maxHealth;
  #damage;
  #attacklist
  
  constructor(name, maxHealth, damage, attacks, currentHealth) {
    this.#name = name;
    this.#maxHealth = maxHealth;
    this.#damage = damage;
    this.currentHealth = maxHealth;
    this.attacklist =[];
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

  setAttacks() {
    this.attacklist.push(attackObj);
  }

  getAttacks() {
    console.log(this.#attacklist);
    for (const attack of this.attacklist ){
      console.log(`${attackObj.attackName}, ${attackObj.attackDamage}`);
      // return this.#attacklist;
    }  
  }
}


//Detta är bara lite testning. Jag vill få in attackerna som object på fightern eg
export class Attacklist { 
  constructor(listName){
    this.listName = listName;
    this.list = [];
  }
  addAttack(attackobject){
    this.list.push(attackobject);
    console.log(attackobject.attackname);

  }
  showAttacks(){    
    for (const attack of this.list ){ 
      console.log(`${attack.attackname}, ${attack.attackdamage}`);
    }
    // return this.list;
  }
}




export{Fighter} ;



