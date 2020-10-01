import CarController from './CarController.js';
import MyCar from './MyCar.js';
import RandomCar from "./RandomCar.js";
import Road from './Road.js';
import { vehicleHit } from './VehicleHit.js';

export default class Game{

    constructor(context){
        this.context = context;
        this.myCar = new MyCar(this);
        this.road = new Road(this);
        this.traffic = [];
        this.randomCar = new RandomCar(this)
        new CarController({road:this.road, myCar:this.myCar})

        setInterval(()=>this.populateTraffic(), 1000);

        this._paused = false;
        // this._gameOver = false;
    }

    populateTraffic(){
        if(this._paused) return;
        let randomCar = new RandomCar(this);
        this.traffic.push(randomCar);
    }
    
      set pause(pause){
        this._paused = pause;
    }

    update(){
        
        if(this._paused) return;

        this.road.update();

        this.myCar.update();

        this.randomCar.update();

        this.traffic.forEach(car => {
            car.update();
        });

        if(vehicleHit(this.myCar, this.traffic)){
            console.log('CollisionDetected')

            this._paused = true;}
    }


}
