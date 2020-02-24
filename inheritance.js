class Base1{

 setName(name){
    this.name = name;
     }

     setEngine(){
         console.log("Start Engine from base class");
         }

     stopEngine(){
        console.log("Stop engine from base class");
         }

}
class Child1 extends Base1{

    stopEngine(){
        console.log("Stop engine from child class");
         }
    speedEngine(speed){
            console.log("Speed  from chil class "+this.name+' is' +speed);
             }
}
let myCar = new Child1();
myCar.setName('Yusra');
myCar.setEngine();
myCar.stopEngine();
myCar.speedEngine(100);