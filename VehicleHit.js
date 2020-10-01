export function vehicleHit(myCar, traffic){

    for(let i=0; i<traffic.length; i++) {

        let randomCar = traffic[i];

        if(randomCar.positionY > 540 && randomCar.positionY < 600){

            if(Math.abs(randomCar.positionX - myCar.positionX) <= 50){

                return true;
            }

        }

    }

    return false;
}
