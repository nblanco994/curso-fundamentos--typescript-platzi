console.log('Hola Platzi');

// Number
// Explicito
let phone: number;
phone = 1;
phone = 5432318;
//phone = 'hola'; // Error

// Inferido
let phoneNumber = 5432318;
phoneNumber = 123;
//phoneNumber = true; // Error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean
//Tipado Explicito

let isPro: boolean;
isPro = true;
//isPro =1; // Error

// Inferido

let isUserPro = false;
isUserPro = true;
//isUserPro = 10; //Error

// Stringd - Cadenas
let username: string = 'nblanco';
username = 'Niyuby';
//username = true; // Error por el tipo de dato

// Template String
// Uso de backtick ``
let userInfo: string;
userInfo = `
    User info:
    username: ${username}
    firstName: ${username + ' Blanco'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo);


