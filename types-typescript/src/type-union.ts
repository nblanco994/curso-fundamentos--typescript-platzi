export{}

// 10, '10'
/*let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un ID 
function getUsernameId(id: number | string) {
    // L ogica de negocio, find the user
    return 'nblanco';
}

getUsernameId(20);
getUsernameId('20');*/

// Alias de Tipos: TS 
type IdUser = number | string;
type Username = string;
let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un ID 
function getUsernameId(id: IdUser): Username {
    // L ogica de negocio, find the user
    return 'nblanco';
}

getUsernameId(20);
getUsernameId('20');

// Tipos literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPicture: SquareSize = '200x200'; //Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
let largePicture: SquareSize = '1000x1000';

// Reto Definir las diferentes resoluciones en Flickr

enum PicturesSize {
    small = '75x75',
    medium = '240x180',
    large = '500x375',
    extraLarge = '1024x768',
    superLarge = '3072x2304'
}

const pictureSmall: PictureOrientation = PictureOrientation.Landscape;
type PhotoSizeType = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304';
const medium: PhotoSizeType = '240x180';