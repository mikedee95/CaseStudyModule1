export function vehicleHit(myCar, traffic){

    for(let i=0; i<traffic.length; i++) {

        let randomCar = traffic[i];

        if(randomCar.positionY > 420 && randomCar.positionY < 742){

            if(Math.abs(randomCar.positionX - myCar.positionX) <= 60){

                return true;
            }

        }

    }

    return false;
}