interface Person {
    name: string,
    id: number
}

class BankAccount {
    accountNumber: number
    ownerName: string
    private balance: number

    constructor(accNumber: number, owner: string, balance: number){
        this.accountNumber = accNumber;
        this.ownerName = owner;
        this.balance = balance;
    }


    deposit(amount: number): string{
        if(amount > 0){
            this.balance += amount;
        }
        return `Current balance ${this.balance}`
    }


    withdraw(amount: number): string {
        if(amount < this.balance){
            this.balance -= amount
            return `Current Balance: ${this.getBalance()}`
        }

        return 'Insufficient Balance';
    }


    getBalance(): number{
        return this.balance
    }
}



class Employee {
    name: string
    id: number
    protected salary: number


    constructor(name: string, id: number, salary: number){
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    getDetails(): Person{
        return {
            'name': this.name,
            'id': this.id
        }
    }

    calculateBonus(): number{
        const bonus = this.salary * (0/100)
        return bonus;
    }

}



class Developer extends Employee{
    constructor(name: string, id: number, salary: number){
        super(name, id, salary)
    }

    calculateBonus(): number{
        const bonus = this.salary * (10/100)
        return bonus;
    }
}


class Manager extends Employee{
    constructor(name: string, id: number, salary: number){
        super(name, id, salary)
    }

    calculateBonus(): number{
        const bonus = this.salary + this.salary * (20/100)
        return bonus;
    }
}

abstract class Vehicle {
    brand: string
    model: string
    year: number


    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    abstract startEngine(): string
}



class Car extends Vehicle{
    constructor(brand: string, model: string, year: number){
        super(brand, model, year)
    }

    startEngine(): string{
        return "Car engine starting..."
    }
}


class Bike extends Vehicle {
    constructor(brand: string, model: string, year: number){
        super(brand, model, year)
    }

    startEngine(): string{
        return "Bike engine starting..."
    }
}

class Truck extends Vehicle {
    constructor(brand: string, model: string, year: number){
        super(brand, model, year)
    }

    startEngine(): string{
        return "Truck engine starting..."
    }
}


const vehicles: Vehicle[] = [
    new Car("Toyota", "Corolla", 2024),
    new Bike("Yamaha", "R15", 2023),
    new Truck("Volvo", "FH", 2022)
];

for (const vehicle of vehicles) {
    console.log(vehicle.startEngine());
}
