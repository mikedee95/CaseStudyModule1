export default class RandomCar{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.car = new Image;
        this.car.src = "images/car2.png";
        this._positionY = Math.random() * 480 * -1;
        this.speed = (Math.random() * 7) + 3;
        this.lane = Math.floor(Math.random() * 3);
        this.lanePosX = [100,200,300,400];
        this.carWidth = 50;
        this.carLength = 100;
    }

    get width(){
        return this.carWidth;
    }

    get length(){
        return this.carLength;
    }

    get positionX(){
        return this.lanePosX[this.lane];
    }

    get positionY(){
        return this._positionY;
    }

    update(){
        this._positionY += (this.game.randomCar.speed/5 + this.speed);
        this.context.drawImage(this.car,
            this.carNo * this.carWidth,
            0,
            this.width,
            this.length,
            this.lanePosX[this.lane],
            this._positionY,
            this.carWidth,
            this.carLength
        );

        if(this._positionY >= 742){
            this.game.traffic.splice(this.game.traffic.indexOf(this), 1);
        }
    }
}