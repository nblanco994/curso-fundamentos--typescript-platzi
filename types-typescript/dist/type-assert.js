"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <> Angle Bracket syntax
var username;
username = 'nblanco';
username = 'niyu';
// Tenemos una cadena, TS confia en mi!
var message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
console.log('message', message);
var usernameWithId = 'nblanco 1';
// Como obtener el username?
username = usernameWithId.substring(0, 7);
console.log('Username only', username);
// Sintaxis "as"
message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
var helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username', username);
