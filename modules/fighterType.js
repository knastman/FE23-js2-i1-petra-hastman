import { Fighter } from "./fighter.js";

class FighterZangief extends Fighter {
    constructor(name, maxHealth) {
        super('Zangief', 850);
       
    }
    addAttack(name, damage) {
        this.attackArray.push({ name, damage });
    }
}

class FighterType extends Fighter{
    constructor(name, maxHealth){
        super('Zelda', 650);
        
    }

    addAttack(name, damage) {
        this.attackArray.push({ name, damage });
    }

}

export {FighterZangief, FighterType}