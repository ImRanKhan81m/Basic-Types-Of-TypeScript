

const age: number = 10;

// if (age >= 18) {
//     console.log('You are an adult');
// } else {
//     console.log('You are not an adult');
// }

const isAdult = age >= 18 ? true : false; 
// console.log(isAdult);

// nullish coalescing operator
// Null and undefined

// const isAuthenticatedUser = null
// const isAuthenticatedUser = undefined
const isAuthenticatedUser = ''
const userName = isAuthenticatedUser ?? 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
// console.log({userName}, {userName2});


type Manush={
    name: string;
    age: number;
    address?: {
        city: 'No city';
        country: string;
        road: 'No road';
        home?: '';
    }
}

const manush1: Manush = {
    name: 'Rahim',
    age: 20,
    address: {
        city: 'No city',
        country: 'Bangladesh',
        road: 'No road',
    }
}

const home = manush1?.address?.home ?? 'No home';

console.log(home);