import { faker } from '@faker-js/faker';

class AcountData{

    name;
    email;
    password;

    constructor(){
        this.name=faker.name.firstName();
        this.email=faker.internet.email(this.name, '', 'gmail.com');
        this.password=faker.internet.password(12,false, /[a-zA-Z]/, '1_');
    }

    get getName(){
        return this.name;
    }

    get getEmail(){
        return this.email;
    }

    get getPassword(){
        return this.password;
    }
}
export default new AcountData();
