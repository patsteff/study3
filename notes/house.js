function House(color) {
    this.facadeColor = color;
    this.paintWhite = function () {
        this.facadeColor = "white";
    };
}
const house = new House("red");
setTimeout(function () { house.paintWhite(); }, 100);

function Villa(color) {
    this.facadeColor = color;
    this.paintWhite = function () {
        this.facadeColor = "white";
    };
}
const villa = new Villa("red");
setTimeout(villa.paintWhite.bind(villa), 100);


function Hotel(color) {
    this.facadeColor = color;
    this.paintWhite = function () {
        this.facadeColor = "white";
    };
}
const hotel = new Hotel("red");
setTimeout(() => hotel.paintWhite(), 100);
