const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"]
    } 
  },
    
  roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    }
}
  adventurer.roll()

  for(let i=0; i< adventurer.inventory.length; i++){
    console.log (adventurer.inventory[i])
  } 
  //part 2.
  class Character {
    static MAX_HEALTH = 100;//Use the static keyword to create constant properties
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
      
    }
    roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
      }
  }
  //Robin using the Character class!
//   const robin = new Character("Robin");
//   robin.inventory = ["sword", "potion", "artifact"];
//   robin.companion = new Character("Leo");
//   robin.companion.type = "Cat";
//   robin.companion.companion = new Character("Frank");
//   robin.companion.companion.type = "Flea";
//   robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
//robin.roll()
 
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"]; //Use the static keyword to create constant properties
  constructor (name, role) {
     if(!ROLES.includes(role)){
    console.log("invalid role")
  }
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}
class Companion extends Character {
  constructor (name, type){
    super(name);
    this.type = type;
  }
}

const robin = new Adventurer("Robin", "" )
console.log(robin.scout())
robin.companion = new Companion("Leo", "cat")
console.log(Character.MAX_HEALTH)
