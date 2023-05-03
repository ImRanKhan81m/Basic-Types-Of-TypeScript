// normal function

// function adds(num1, num2){
//     return num1 + num2;
// }

function add(a: number, b: number): number {
    return a + b;
}

add(1, 2);

// array function

const addArrow = (a: number, b: number): number => a + b;

const arr = [1, 2, 3];

const newArray = arr.map((item:number) => item * item);

// const persons:{
//     name: string,
//     balance: number,
//     addBalance: (money: number) => string 
// } = {
//     name: 'John',
//     balance: 20,
//     addBalance(money: number){
//         return `My new balance is ${this.balance + money}`;
//     }
// }
const persons:{
    name: string,
    balance: number,
    addBalance: (money: number) => void
} = {
    name: 'John',
    balance: 20,
    addBalance(money: number){
        console.log(`My new balance is ${this.balance + money}`);
    }
}

// spread operator

const friends = ['John', 'Peter', 'Bob'];
const newFriends = ['Anna', 'Mary'];

friends.push(...newFriends);

// rest operator

// const greetFriends =( friends1: string,friends2: string, friends3:string):void=>{
//     console.log(` Hello ${friends1} \n Hi ${friends2} \n Hello ${friends3}`);
// }
const greetFriends =(...friends:string[]):void=> friends.forEach(friend => console.log(`Hello ${friend}`));


greetFriends("John", "Peter", "Bob", "Anna", "Mary");


// array and object destructuring

const [bestFriend] = friends;