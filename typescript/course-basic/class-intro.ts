class Banda {
    name: string;
    private type: string;
    protected age: string;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    setAge(age: string): void {
        this.age = age
    }

    printAge(): void {
        console.log(this.age)
    }

    printType(): void {
        console.log(this.type)
    }

}

const don = new Banda('Don', 'don123')
don.setAge('34')
console.log(don);
don.printAge()
don.printType()

//inheritance
class Saini extends Banda {
    //name = "Don"
    constructor(userName: string) {
        super("Don", userName);
        this.age = '31';
    }
}

let s = new Saini('don')
console.log(s)


console.log('//getter settter')

class Plant {
    private _species: string = "lehsun";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value
        } else {
            this._species = "loda lele"
        }
    }
}

let plant = new Plant()
console.log(plant.species)
plant.species = "as"
console.log(plant.species)
plant.species = "hello world"
console.log(plant.species)

//static
console.log('----------------')

class Helper {
    static PI = 3.14;
    static calcCircumference(daimeter: number): number {
        return daimeter
    }
}
console.log(Helper.PI)
console.log(Helper.calcCircumference(12))

//Abstract class
abstract class Project {
    name: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget(): number {
        return this.budget + Math.random()*this.budget
    }
}


class LodanProject extends Project{
    changeName(name: string): void {
        this.name = name
    }
}

let pecFest = new LodanProject()
console.log(pecFest)
pecFest.changeName('pecfest')
console.log(pecFest)
console.log(pecFest.calcBudget())