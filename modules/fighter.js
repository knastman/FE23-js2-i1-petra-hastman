class Fighter {
    #name;
    #maxHealth;
    #currentAttack;
    #damage;
    
    constructor(name, maxHealth, damage) {
        this.#name = name;
        this.#maxHealth = maxHealth;
        this.#damage = damage;
    }

    getName() {
        return this.#name;
    }

    getmaxHealth() {
        return this.#maxHealth;
    }

    addAttack() {
        return this.#damage;
    }

    
    setAttackStyle(damage) {
        this.#currentAttack = damage;
    }
    getCurrentAttack() {
        return this.#currentAttack;
    }
    
   
    /* clearAttacks() {
        this.attackArray = [];
    } */
    logInfo() {
        console.log(`${this.getName()} Health: ${this.getmaxHealth()}`);
    }

}

export{Fighter} 