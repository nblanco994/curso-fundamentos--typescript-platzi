"use strict";
// Orientacion para  fotografias
//const landscape = 0;
//const portrait = 1;
//const square = 2;
//const panorama = 3;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; // 3
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Lansdcape', PhotoOrientation[landscape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama"; // 13
})(PictureOrientation || (PictureOrientation = {}));
console.log('portrait', PictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Venezuela"] = "ven";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
})(Country || (Country = {}));
var country = Country.Venezuela;
console.log('country', country);
// Reto extender los enumerados
var WorkDay;
(function (WorkDay) {
    WorkDay[WorkDay["Monday"] = 1] = "Monday";
    WorkDay[WorkDay["Tuesday"] = 2] = "Tuesday";
    WorkDay[WorkDay["Wednesday"] = 3] = "Wednesday";
    WorkDay[WorkDay["Thursday"] = 4] = "Thursday";
    WorkDay[WorkDay["Friday"] = 5] = "Friday";
})(WorkDay || (WorkDay = {}));
var WeekendDay;
(function (WeekendDay) {
    WeekendDay[WeekendDay["Saturday"] = 6] = "Saturday";
    WeekendDay[WeekendDay["Sunday"] = 7] = "Sunday";
})(WeekendDay || (WeekendDay = {}));
var Week = __assign(__assign({}, WorkDay), WeekendDay);
console.log('week', Week);
