function myFunction(){

}

let empDetails = function(name, age){
//this way of creation of function is actually we are creating a constructor.
//java script can have constructor without adding a class.
this.name = name;
this.age = age;

this.getName = function(){
   return this.name;
};
this.getAge = function(){
   return this.age;
};
};

empDetails.prototype.getName = function(){
    return this.name;
 };
let emp1 = new empDetails('Rabia',44);
let emp2 = new empDetails('Yusra',77);
console.log(emp1.getName());

