let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

let road = new Image;
road.src = "images/road2.png";
let car = new Image;
car.src = "images/car2.png";

road.onload = () => {
    requestAnimationFrame(roadloop);
}
let yOffset = -420;
function roadloop(){
    if (yOffset >= 0) yOffset = -420;

    context.drawImage(road, 0 , yOffset);
    context.drawImage(road, 0 , yOffset + 420);
    context.drawImage(road, 0 , yOffset + 840);
    yOffset += 10;

    context.drawImage(car, 240, 620, 55, 100);

    requestAnimationFrame(roadloop);

}

// function Game(context){
//     this.context = context;
// }
//
// function Road(game){
//     this.game = game;
//     this.context = this.game.context;
//     this.yOffset = -420;
//     this.road = new Image;
//     this.road.src = "images/road2.png";
// }