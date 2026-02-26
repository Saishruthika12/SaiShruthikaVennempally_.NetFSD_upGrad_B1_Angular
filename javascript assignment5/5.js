class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    getDetails(){
        console.log(this.name+ "is earning"+ this.salary);
    }

}
class Manager extends Employee{
    constructor(name,salary,bonus){
        super(name,salary);
        this.bonus=bonus;
    }
    getTotalSalary(){
        let TotalSalary=this.bonus+this.salary;
       return TotalSalary;
    }
}
class Director extends Manager{
    constructor(name,salary,bonus,stockOptions){
        super(name,salary,bonus);
        this.stockOptions=stockOptions;
    }
    getFullCompensation(){
        let FullCompensation=this.getTotalSalary()+this.stockOptions;
        console.log(FullCompensation+"is the full compensation");
    }
}
let Director1=new Director("sai",40000,20000,10000);
Director1.getFullCompensation();
