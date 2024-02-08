class Fighter{
    #name
    #maxHealth
    constructor(name, maxHealth, attackArray){
        this.#name = name
        this.#maxHealth = maxHealth;
        this.attackArray = [];
        
    }

    getName(){
        return this.#name;
    }
    getmaxHealth(){
        return this.#maxHealth;
    }

    getAttackArray() {
        if (this.attackArray.length === 0) {
            return 'No attacks available.';
        } 
        else {
            return this.attackArray;
        }
    }
    clearAttacks() {
        this.attackArray = [];
    }
    logInfo() {
        console.log(`${this.getName()} Health: ${this.getmaxHealth()}`);
    }

}

export{Fighter} 