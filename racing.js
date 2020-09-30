let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

let road = new Image;
road.src = "images/road2.png";
let car = new Image;
car.src = "images/car2.png";
let game = new Game(context);

road.onload = () => {
    requestAnimationFrame(roadloop);
}
let yOffset = -420;

function roadloop() {
    if (yOffset >= 0) yOffset = -420;

    context.drawImage(road, 0, yOffset);
    context.drawImage(road, 0, yOffset + 420);
    context.drawImage(road, 0, yOffset + 840);
    yOffset += 10;

    context.drawImage(car, 240, 620, 55, 100);

    requestAnimationFrame(roadloop);
// Make the background goes in a loop.
}

function Game(context) {
    this.context = context;
    this.road = new Road(this);
    this.myCar = new MyCar(this);
}

function Road(game) {
    this.game = game;
    this.context = this.game.context;
    this.yOffset = -420;
    this.road = new Image;
    this.road.src = "images/road2.png";
    this.controller = new CarController({
        road: this.road, myCar: this.myCar
    })
}

function MyCar(game) {
    this.game = game;
    this.context = this.game.context;
    this._positionX = 240;
    this._positionY = 650;

    this.car = new Image;
    this.car.src = "images/car2.png";

    this.context.drawImage(this.car, this._positionX, this._positionY);

    this.moveLeft = function(){
        this._positionX -=5;
        if(this._positionX <= 130) this._positionX = 130;
    }

    this.moveRight = function(){
       this._positionX +=5;
        if(this._positionX >= 350) this._positionX = 350;
    }

}

function CarController(options) {
    this.road = options.road;
    this.myCar = options.myCar;
    this.init = function(){
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37: //move the car to the left
                    this.myCar.moveLeft();
                    alert("Hello");
                    break;
                case 39: //move the car to the right
                    this.myCar.moveRight();
                    break;
                case 38: // increase the car speed ( change the background movement in game)
                    break;
                case 40: // decrease the car speed ( change the background movement in game)
                    break;
                default:
                    break;
            }
        })
    }
}
