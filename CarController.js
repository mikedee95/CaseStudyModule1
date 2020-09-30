export default class CarController{

    constructor(options){
        this.road = options.road;
        this.myCar = options.myCar;
        this.init();
    }

    init(){
        document.addEventListener("keydown", (e)=>{
            switch(e.keyCode){
                case 37: // left arrow key
                    this.myCar.moveLeft();
                    break;
                case 39: // right arrow key
                    this.myCar.moveRight();
                    break;
                default:
                    break;
            }
        });
    }


}