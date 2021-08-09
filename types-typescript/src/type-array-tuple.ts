// Corchetes []

// Tipo Explicito

let users: string[];
users = ['nblanco', 'paparazzi', 'lensqueen'];
//users = [1, true, 'test']; // Error

// Tipo Inferido
let otherUsers = ['nblanco', 'paparazzi', 'lensqueen'];
//otherUsers = [1, true, 'test']; // Error

// Array<TIPO>

let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accediendo a los valores en un array
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);

// Propiedades en Array
console.log('users.length', users.length);

// Uso de funciones en Arrays
users.push('aPlatziUser');
users.sort();
console.log('users', users);


