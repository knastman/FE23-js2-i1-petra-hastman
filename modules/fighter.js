class Fighter {
    #name;
    #maxHealth;
    #damage;
    
    constructor(name, maxHealth, damage, currentHealth) {
        this.#name = name;
        this.#maxHealth = maxHealth;
        this.#damage = damage;
        this.currentHealth = maxHealth;
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

   

}

export{Fighter} 