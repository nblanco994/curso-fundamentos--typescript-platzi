"use strict";
// Crear una fotografia
/*function createPicture(title, date, size) {
}*/
// Usamos TS, definimos tipos para parametros
/*function createPicture(title: string, date: string, size: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using ', title, date, size);
}

createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '20-03');*/
// Parametros opcionales en funciones 
function createPicture(title, date, size) {
    // Se crea la fotografia 
    console.log('create Picture using ', title, date, size);
}
createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '20-03');
createPicture('Colombia Trip');
createPicture();
// Flat Array Function
var createPic = function (title, date, size) {
    /*return {
        title: title,
        date: date,
        size: size
    };*/
    return { title: title, date: date, size: size };
};
var picture = createPic('Platzi session', '2020-03', '100x100');
console.log('picture', picture);
// Tipo de retorno con TS
function handleError(code, message) {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    var result = handleError(200, 'OK'); // string
    console.log('result', result);
    result = handleError(404, 'error'); // never
    console.log('result', result);
}
catch (error) {
}
