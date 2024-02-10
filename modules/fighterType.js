import { Fighter } from "./fighter.js";

class FighterZangief extends Fighter {
    constructor(name, maxHealth, damage) {
        super('Zangief', 850, damage);
       
    
       
    }

    
    
}

class FighterKunimitsu extends Fighter{
    constructor(name, maxHealth){
        super('Zelda', 650);
        
    }

    

}

export {FighterZangief, FighterKunimitsu}