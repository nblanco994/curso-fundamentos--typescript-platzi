let user: object;
user = {}; // Object

user = {
    id: 1, 
    username: 'paparazzi',
    firstName: 'Rafael',
    isPro: true
};

console.log('user', user);
// Object vs object(Clase JS tipo TS)
const myObj = {
    id: 1, 
    username: 'paparazzi',
    firstName: 'Rafael',
    isPro: true
};

const isInstance = myObj instanceof Object; // Clse Object de JS

console.log('isInstance', isInstance);
console.log('user.username', myObj.username); 