class Vechile{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }
    start(){
        console.log(this.brand+ "vechile is started");
    }
}
class Car extends Vechile{
    constructor(brand,speed,fuelType){
        super(brand,speed);
        this.fuelType=fuelType;
    }
    showDetails(){
        console.log("brand: "+this.brand);
        console.log("speed: "+this.speed);
        console.log("fuel type: "+this.fuelType);
    }
}
let Car1=new Car('toyota',180,'petrol');
Car1.start();
Car1.showDetails();
