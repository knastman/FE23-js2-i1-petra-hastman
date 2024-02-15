import { Fighter, Attack } from "./fighter.js";


class FighterKunimitsu extends Fighter{ 
  constructor(){
    super('Kunimitsu', 100, 90,'Kunimitsu.png',
    [
      new Attack('Blizzard combo', 50, 'hurricane.png' ),
      new Attack('Explosive jab', 85, 'explosion.png'),
      new Attack('Shuriken throw', 70, 'shuriken.png'),
      new Attack('Twisted limbs', 40, 'flash.png'),
    ]);      
  }
}
// const fighterKunimitsu = new FighterKunimitsu();
// console.log('fighterKunimitsu i fightertype');
// console.log(fighterKunimitsu);



class FighterZangief extends Fighter {
  constructor() {
    super('Zangief', 150, 100, 'Zangief.webp',
    [
      new Attack('Air manipulation', 40, 'dust.png' ),
      new Attack('Focus attack', 50, 'focus.png'),
      new Attack('Dynamite punch', 70, 'punch.png'),
      new Attack('Power kick', 60, 'battery.png'),
    ]);    
  }
}

// const fighterZangief = new FighterZangief();
// console.log('fighterZangief i fightertype');
// console.log(fighterZangief);












//GAMMALT
// class FighterKunimitsu extends Fighter{
//   constructor(name, maxHealth, damage){
//     super('Kunimitsu', 650, damage);      
//   }
// }


// export class FighterType extends Fighter{
//   constructor(name, maxHealth, attacklist){
//     super(name, maxHealth, attacklist); 
//   }
// }


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



// export class FighterExempel extends Fighter{
//   constructor(){
//     const name = "Exempelnamn";
//     const health = 299;
//     const attacks = [1, 2, 3];

//     super(name, health, attacks);
//   }
// }

// const fighters = [
//   new FighterExempel(),

// ];


export {FighterZangief, FighterKunimitsu};