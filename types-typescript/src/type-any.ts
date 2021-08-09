// Tipo de dato explicito

let idUser: any;
idUser = 1; // Objeto Number
idUser = '1'; // Objeto String
console.log('idUser', idUser);

//Tipo inferido
let otherId;
otherId = 1;
otherId = '1';
//otherId = true;
console.log('otherId', otherId);

let surprise: any = 'hello typescript';
//surprise.sayHello(); // Error
const res = surprise.substring(6); // Error
console.log('res', res);
