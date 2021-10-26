class Animals {
  constructor(name, specie) {
      this.name = name;
      this.specie = specie;
  }
  sing() {
      return `${this.name} can sing`;
  }
  dance() {
      return `${this.name} can dance`;
  }
}
let bingo = new Animals("Bingo", "Hairy");
console.log(bingo);

function Animals(name, specie) {
    this.name = name;
    this.specie = specie;
}
Animals.prototype.sing = function(){
    return `${this.name} can sing`;
}
Animals.prototype.dance = function() {
    return `${this.name} can dance`;
}
let Bingo = new Animals("Bingo", "Hairy");

//Subclassing
class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
} 
class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");