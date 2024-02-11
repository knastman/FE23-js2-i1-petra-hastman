import { Fighter } from "./fighter.js";

class FighterZangief extends Fighter {
  constructor(name, maxHealth, damage) {
    super('Zangief', 850, damage);
     
  }
}

class FighterKunimitsu extends Fighter{
  constructor(name, maxHealth, damage){
    super('Kunimitsu', 650, damage);      
  }
}


export class FighterType extends Fighter{
  constructor(name, maxHealth, attacklist){
    super(name, maxHealth, attacklist); 
  }
}



export {FighterZangief, FighterKunimitsu};