import CarController from './CarController.js';
import MyCar from './MyCar.js';
import RandomCar from "./RandomCar.js";
import Road from './Road.js';
import {vehicleHit} from './VehicleHit.js';

export default class Game {

    constructor(context) {
        this.context = context;
        this.myCar = new MyCar(this);
        this.road = new Road(this);
        this.traffic = [];
        this.randomCar = new RandomCar(this);
        this.score = 0;
        new CarController({road: this.road, myCar: this.myCar})

        setInterval(() => this.populateTraffic(), 1000);

        this._paused = false;
    }

    populateTraffic() {
        if (this._paused) return;
        let randomCar = new RandomCar(this);
        this.traffic.push(randomCar);
        this.score++;
        document.getElementById('score').innerHTML = this.score;
    }

    set pause(pause) {
        this._paused = pause;
    }

    get pause() {
        return this._paused;
    }

        update() {

        if (this._paused) return;

        this.road.update();

        this.myCar.update();

        this.randomCar.update();

        this.traffic.forEach(car => {
            car.update();
        });

        if (vehicleHit(this.myCar, this.traffic)) {
            let message = "Game Over!!!! Your scores is: "  + this.score + " .Do you want to try again?"
            this._paused = true;
            window.confirm(message);
            if (message){
                window.location.reload();
            }
            this.myCar.resetPosition();
            this.randomCar.update();
            this.traffic = []
            this._paused = false;
            clearInterval();
        }
    }


}
