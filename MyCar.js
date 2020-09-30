export default class PlayerCar{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this._positionX = 240;
        this._positionY = 600;
        this.carWidth = 50;
        this.carLength = 100;
        this.init();
    }

    init(){
        this.car = new Image;
        this.car.src = "images/car2.png";
    }

    get width(){
        return this.carWidth;
    }

    get length(){
        return this.carLength;
    }

    get positionX(){
        return this._positionX;
    }

    set positionX(positionX){
        this._positionX = positionX
    }

    get positionY(){
        return this._positionY;
    }

    set positionY(positionY){
        this._positionY = positionY
    }

    resetPosition(){
        this._positionX = 240;
        this._positionY = 600;
    }

    moveLeft(){
        this._positionX -= 15;
        if(this._positionX <= 100) this._positionX = 100;
    }

    moveRight(){
        this._positionX += 15;
        if(this._positionX >= 360) this._positionX = 360;
    }

    update(){
        this.context.drawImage(this.car, this._positionX, this._positionY, this.width, this.length);
    }
}