export{};
// <> Angle Bracket syntax
let username: any;
username = 'nblanco';
username = 'niyu';

// Tenemos una cadena, TS confia en mi!

let message: string = (<string>username).length > 5 ? 
                        `Welcome ${username}`:
                        'Username is too short';
console.log('message', message);

let usernameWithId: any = 'nblanco 1';

// Como obtener el username?
username = (<string>usernameWithId).substring(0, 7);
console.log('Username only', username);

// Sintaxis "as"
message = (username as string).length > 5 ? 
                        `Welcome ${username}`:
                        'Username is too short';

let helloUser: any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username', username);
