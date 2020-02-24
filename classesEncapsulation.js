class Rabbo1{

 setEmployeeDEtail(name,id,address){
    this.name = name;
    this.id = id;
    this.address = address;
 }

 getEmpName()
 {
     return this.name;
 }

 getEId()
 {
    return this.id;
 }

 getAddress()
 {
    return this.address;
 }


}

let yus = new Rabbo1();
yus.setEmployeeDEtail('JOhn',1,'Frizinghall');
console.log(yus.getEmpName());