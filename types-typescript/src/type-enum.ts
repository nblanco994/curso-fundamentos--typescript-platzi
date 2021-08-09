// Orientacion para  fotografias
//const landscape = 0;
//const portrait = 1;
//const square = 2;
//const panorama = 3;

enum PhotoOrientation {
    Landscape = 0, // 0
    Portrait = 1,// 1
    Square = 2,// 2
    Panorama = 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Lansdcape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape = 10, // 10
    Portrait, // 11
    Square, // 12
    Panorama // 13
}
console.log('portrait', PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol', 
    Venezuela = 'ven',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const country: Country =Country.Venezuela;
console.log('country', country);

// Reto extender los enumerados

enum WorkDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
}

enum WeekendDay {
    Saturday = 6,
    Sunday = 7
}

const Week = {...WorkDay, ...WeekendDay};
console.log('week', Week);