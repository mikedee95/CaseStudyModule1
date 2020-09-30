import CarController from './CarController.js';
import MyCar from './MyCar.js';
import RandomCar from "./RandomCar.js";
import Road from './Road.js';
import {vehicleHit} from './VehicleHit.js';

export default class Game{

    constructor(context){
        this.context = context;
        this.myCar = new MyCar(this);
        this.road = new Road(this);
        this.raceDistance = 1;
        this.traffic = [];
        this.randomCar = new RandomCar(this)
        new CarController({road:this.road, myCar:this.myCar})

        setInterval(()=>this.populateTraffic(), 5000);

        this._paused = false;
        this._gameOver = false;
    }

    populateTraffic(){
        if(this._paused) return;
        let randomCar = new RandomCar(this);
        this.traffic.push(randomCar);
    }

    set pause(pause){
        this._paused = pause;
    }

    get pause(){
        return this._paused;
    }

    tryAgain(e){

        if(e.keyCode !== 32){
            return;
        }

        this.traffic = [];
        this.myCar.resetPosition();
        this.pause = false;
        let screenTryAgain = document.querySelector(".try-again");
        screenTryAgain.style.display = "none";
        document.onkeydown = null;
    }

    update(){

        if(this._gameOver) return;

        if(this._paused) return;

        this.road.update();

        this.myCar.update();

        this.randomCar.update();

        this.traffic.forEach(car => {
            car.update();
        });

        if(vehicleHit(this.myCar, this.traffic)){

            this.pause = true;
            let screenTryAgain = document.querySelector(".try-again");
            screenTryAgain.style.display = "block";
            document.onkeydown = e => this.tryAgain(e);

        }
    }


}