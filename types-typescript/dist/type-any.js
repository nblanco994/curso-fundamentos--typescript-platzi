"use strict";
// Tipo de dato explicito
var idUser;
idUser = 1; // Objeto Number
idUser = '1'; // Objeto String
console.log('idUser', idUser);
//Tipo inferido
var otherId;
otherId = 1;
otherId = '1';
//otherId = true;
console.log('otherId', otherId);
var surprise = 'hello typescript';
//surprise.sayHello(); // Error
var res = surprise.substring(6); // Error
console.log('res', res);
