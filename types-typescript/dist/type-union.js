"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idUser;
idUser = 10;
idUser = '10';
// Buscar username dado un ID 
function getUsernameId(id) {
    // L ogica de negocio, find the user
    return 'nblanco';
}
getUsernameId(20);
getUsernameId('20');
//let smallPicture: SquareSize = '200x200'; //Error
var smallPicture = '100x100';
var mediumPicture = '500x500';
var largePicture = '1000x1000';
// Reto Definir las diferentes resoluciones en Flickr
var PicturesSize;
(function (PicturesSize) {
    PicturesSize["small"] = "75x75";
    PicturesSize["medium"] = "240x180";
    PicturesSize["large"] = "500x375";
    PicturesSize["extraLarge"] = "1024x768";
    PicturesSize["superLarge"] = "3072x2304";
})(PicturesSize || (PicturesSize = {}));
var pictureSmall = PictureOrientation.Landscape;
var medium = '240x180';
