class A{
    constructor(name){
        this.name =name;
    }
    methodA(){
        console.log(this.name+' '+'Eat Fish');
    }
}

class B extends A{

    methodA(){
        super.methodA();
        console.log(this.name+' '+'Eat Cat');
    }

}

let abc = new B('Yusra');
abc.methodA();
