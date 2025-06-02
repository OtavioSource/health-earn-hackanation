export class User {

    name: string;
    age: number;
    firstTime: boolean;
    address: string;

    constructor(name: string, age: number, firstTime: boolean, address: string) {
        this.name = name;
        this.age = age;
        this.firstTime = firstTime;
        this.address = address;
    }
}