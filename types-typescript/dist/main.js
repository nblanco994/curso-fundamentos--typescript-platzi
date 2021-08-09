"use strict";
console.log('Hola Platzi');
// Number
// Explicito
var phone;
phone = 1;
phone = 5432318;
//phone = 'hola'; // Error
// Inferido
var phoneNumber = 5432318;
phoneNumber = 123;
//phoneNumber = true; // Error por tipo
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo: Boolean
//Tipado Explicito
var isPro;
isPro = true;
//isPro =1; // Error
// Inferido
var isUserPro = false;
isUserPro = true;
//isUserPro = 10; //Error
// Stringd - Cadenas
var username = 'nblanco';
username = 'Niyuby';
//username = true; // Error por el tipo de dato
// Template String
// Uso de backtick ``
var userInfo;
userInfo = "\n    User info:\n    username: " + username + "\n    firstName: " + (username + ' Blanco') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
