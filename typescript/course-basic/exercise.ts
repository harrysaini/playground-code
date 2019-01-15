type BankAccount = {money: number, deposit: (value: number) => void}
let bankAccount : BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself : {name: string, bankAccount: BankAccount, hobbies:string[] }= {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

//-------------- es6 -------------//

// Exercise 1
let double = (value: number):number =>  value * 2; ;
console.log(double(10));

// Exercise 2
let greet = (name : string = "Max"): void => {
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3
let numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5
let testResults = [3.89, 2.99, 1.38];
let [ result1, result2, result3 ] = testResults
console.log(result1, result2, result3);

// Exercise 6
let scientist = {firstName: "Will", experience: 12};
let { firstName , experience } = scientist;
console.log(firstName, experience);