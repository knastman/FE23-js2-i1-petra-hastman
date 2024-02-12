import { Fighter, Attack } from "./fighter.js";

class FighterZangief extends Fighter {
  constructor(name, maxHealth, damage) {
    super('Zangief', 850, damage);
     
  }
}

// class FighterKunimitsu extends Fighter{
//   constructor(name, maxHealth, damage){
//     super('Kunimitsu', 650, damage);      
//   }
// }



class FighterKunimitsu extends Fighter{ 
  constructor(){
    super('Kunimitsu', 370, 0, 
    [
      new Attack('Blizzard combo', 40, 'explosion.png' ),
      new Attack('Explosive jab', 85, 'explosion.png'),
      new Attack('Shuriken throw', 85, 'shuriken2.png'),
      new Attack('Twisted limbs', 85, 'flash.png'),
    ],
    'Kunimitsu.png');      
  }
}

const fighterKunimitsu = new FighterKunimitsu();
console.log('fighterKunimitsu i fightertype');
console.log(fighterKunimitsu);







// class DodgeFighter extends Fighter {
//   makeAttak() {
//     // blbla specifkk kod f;r att r
//   }

//   receiveHit(atk) {
//     // duck
//   }
// }

// class FighterKunimitsu extends Fighter {
//   constructor(dodgeChance){
//     super('Kunimitsu', 650, []);      
//     this.dodgeChance = dodgeChance;
//   }

//   receiveHit(atk) { 

//   }
// }









// export class FighterType extends Fighter{
//   constructor(name, maxHealth, attacklist){
//     super(name, maxHealth, attacklist); 
//   }
// }

// export class FighterTim extends Fighter{
//   constructor(){
//     const name = "Tim";
//     const health = 299;
//     const attacks = [1, 2, 3];

//     super(name, health, attacks);
//   }
// }


// const fighters = [
//   new FighterTim(),

// ];




export {FighterZangief, FighterKunimitsu};